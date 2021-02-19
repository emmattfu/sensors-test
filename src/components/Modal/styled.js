import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2rem 1rem;
  backdrop-filter: blur(40px);
  margin-bottom: 2rem;
  border: 2px solid transparent;
  background-clip: padding-box;
  border-radius: 1.5rem;
  color: white;
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

export const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledTimesIcon = styled(FaTimes)`
  font-size: 1.5rem;
  cursor: pointer;
`;