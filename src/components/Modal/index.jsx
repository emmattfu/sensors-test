import React from "react";
import ReactDom from "react-dom";
import {
  StyledModal,
  StyledOverlay,
  StyledModalHeader,
  StyledTimesIcon,
  StyledModalTitle,
} from "./styled";
import PropTypes from "prop-types";

const Modal = ({ children, open, title, close }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <StyledOverlay />
      <StyledModal>
        <StyledModalHeader>
          <StyledModalTitle>{title}</StyledModalTitle>
          <StyledTimesIcon onClick={close} />
        </StyledModalHeader>

        {children}
      </StyledModal>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
