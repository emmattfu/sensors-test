import React, { useCallback } from "react";
import { StyledNewSensorCard, StyledFaPlus } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { switchModal } from "../../store/slices/modalSlice";
import Modal from "../Modal";
import { modalSelector } from "../../store/selectors";
import NewSensorForm from "../NewSensorForm";

const NewSensorCard = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(modalSelector);

  const openModalHandler = useCallback(() => {
    dispatch(switchModal());
  }, [dispatch]);

  return (
    <StyledNewSensorCard>
      <StyledFaPlus onClick={openModalHandler} />
      <Modal open={isOpen} close={openModalHandler} title={"Add new sensor"}>
        <NewSensorForm />
      </Modal>
    </StyledNewSensorCard>
  );
};

export default NewSensorCard;
