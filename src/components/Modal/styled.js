import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { DANGER, MAIN_COLOR } from "../../styled";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 500px;
  background-color: white;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  border: 2px solid ${MAIN_COLOR};
  border-radius: 5px;
  background-clip: padding-box;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

export const StyledModalTitle = styled.h2`
  margin: 0;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledTimesIcon = styled(FaTimes)`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${DANGER};
`;
