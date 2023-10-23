import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addOrRemoveCard, fetchMovieList } from "../../store/movieActions";
import { PageContext } from "../../context/PageContext";
import { ActionIcon, ActionText, ActionWrapper } from "./styles";
import loadingIcon from "../../assets/icons/loadingCircle.svg";
import deleteIcon from "../../assets/icons/trash-can-outline.svg";
import successIcon from "../../assets/icons/checkbox-marked-circle-outline.svg";
import errorIcon from "../../assets/icons/close-circle-outline.svg";

export interface RemoveActionProps {
  id: number;
}

export const RemoveAction: React.FC<RemoveActionProps> = (props) => {
  const REMOVE = "Remove";
  const [movieId, setMovieId] = useState<number>(0);
  const [actionLoading, setActionLoading] = useState<boolean>(false);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const globalPage = useContext(PageContext);

  const createIcon = () => {
    if (actionLoading && movieId === props.id) return loadingIcon;
    else return deleteIcon;
  };

  const runBasicStates = () => {
    setActionLoading(true);
    setMovieId(props.id);
  };

  const runSuccessStates = () => {
    setActionLoading(false);
    setMovieId(0);
  };

  const removeFromList = () => {
    runBasicStates();

    dispatch(
      addOrRemoveCard({
        media_type: "movie",
        media_id: props.id,
        toggle: false,
        listName: pathname.substring(1),
      })
    )
      .then(() => {
        toast.success("Removed", {
          icon: <img src={successIcon} alt="success" />,
        });
        runSuccessStates();
        dispatch(
          fetchMovieList({
            listName: pathname.substring(1),
            page: globalPage.currentPage,
          })
        );
      })
      .catch(() => {
        setActionLoading(false);
        toast.error("Oops! Please try again.", {
          icon: <img src={errorIcon} alt="error" />,
        });
      });
  };
  return (
    <ActionWrapper onClick={removeFromList}>
      <ActionIcon src={createIcon()} alt="Film Mining" />
      <ActionText>{REMOVE}</ActionText>
    </ActionWrapper>
  );
};
