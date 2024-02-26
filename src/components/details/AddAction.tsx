import React, { useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addOrRemoveCard } from "../../store/movieActions";
import { TextElement } from "../TextElement";
import { cleanAndLowerCase } from "../../components/helpers/cleanAndLowerCase";
import { SecondaryButton } from "../../assets/styles/defaultStyles";
import { Actions, ButtonIcon } from "./styles";
import loadingIcon from "../../assets/icons/loadingCircle.svg";
import successIcon from "../../assets/icons/checkbox-marked-circle-outline.svg";
import errorIcon from "../../assets/icons/close-circle-outline.svg";

export interface AddActionProps {
  type: string;
  icon: string;
}

export const AddAction: React.FC<AddActionProps> = (props) => {
  const [activeAction, setActiveAction] = useState<string>("");
  const [actionLoading, setActionLoading] = useState<boolean>(false);
  const params = useParams();
  const dispatch = useAppDispatch();

  const createToast = (code: number) => {
    toast.success(
      `${code === 1 ? "Added to " : code === 12 ? "Already in " : ""} ${
        props.type
      }`,
      {
        icon: <img src={successIcon} alt="success" />,
      }
    );
  };

  const runBasicStates = (type: string) => {
    setActiveAction(type);
    setActionLoading(true);
  };

  const addToList = () => {
    runBasicStates(props.type);

    dispatch(
      addOrRemoveCard({
        media_type: "movie",
        media_id: parseInt(params.movieId || ""),
        toggle: true,
        listName: cleanAndLowerCase(props.type),
      })
    )
      .then(unwrapResult)
      .then((res) => {
        setActionLoading(false);
        createToast(res.status_code);
      })
      .catch(() => {
        setActionLoading(false);
        toast.error("Oops! Please try again.", {
          icon: <img src={errorIcon} alt="error" />,
        });
      });
  };

  return (
    <Actions>
      <SecondaryButton onClick={addToList}>
        <ButtonIcon
          src={
            actionLoading && activeAction === props.type
              ? loadingIcon
              : props.icon
          }
          alt="Film Mining"
        />
        <TextElement tag="span">{`Add to ${props.type}`}</TextElement>
      </SecondaryButton>
    </Actions>
  );
};
