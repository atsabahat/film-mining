import React, { useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addOrRemoveCard } from "../../store/movieActions";
import { FAVORITE, WATCH_LIST } from "../../constants/ListName";
import { cleanAndLowerCase } from "../../components/helpers/cleanAndLowerCase";
import { ActionIcon, ActionText, ActionWrapper } from "./styles";
import bookmarkIcon from "../../assets/icons/bookmark-outline.svg";
import heartIcon from "../../assets/icons/heart-outline.svg";
import loadingIcon from "../../assets/icons/loadingCircle.svg";
import successIcon from "../../assets/icons/checkbox-marked-circle-outline.svg";
import errorIcon from "../../assets/icons/close-circle-outline.svg";

export interface AddActionProps {
  id: number;
  type: string;
}

export const AddAction: React.FC<AddActionProps> = (props) => {
  const [activeAction, setActiveAction] = useState<string>("");
  const [movieId, setMovieId] = useState<number>(0);
  const [actionLoading, setActionLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const createIcon = () => {
    if (actionLoading && activeAction === props.type && movieId === props.id)
      return loadingIcon;
    else
      return props.type === WATCH_LIST
        ? bookmarkIcon
        : props.type === FAVORITE
        ? heartIcon
        : "";
  };

  const runBasicStates = () => {
    setActionLoading(true);
    setMovieId(props.id);
    setActiveAction(props.type);
  };

  const createToast = (code: number, label: string) => {
    toast.success(
      `${code === 1 ? "Added to" : code === 12 ? "Already in" : ""} ${label}`,
      {
        icon: <img src={successIcon} alt="success" />,
      }
    );
  };

  const runSuccessStates = () => {
    setActionLoading(false);
    setMovieId(0);
  };

  const addToList = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    runBasicStates();

    dispatch(
      addOrRemoveCard({
        media_type: "movie",
        media_id: props.id,
        toggle: true,
        listName: cleanAndLowerCase(props.type),
      })
    )
      .then(unwrapResult)
      .then((res) => {
        createToast(res.status_code, props.type);
        runSuccessStates();
      })
      .catch(() => {
        setActionLoading(false);
        toast.error("Oops! Please try again.", {
          icon: <img src={errorIcon} alt="error" />,
        });
      });
  };

  return (
    <ActionWrapper onClick={(e) => addToList(e)} data-testid="add">
      <ActionIcon src={createIcon()} alt="Film Mining" />
      <ActionText>{props.type}</ActionText>
    </ActionWrapper>
  );
};
