import styled from "styled-components";
import { popInScaleCentered } from "./Keyframes";

// Main wrapper for modal
export const StyledModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 20vh;
  border-radius: 5px;
  background-color: ${(props) => props.theme.modalBackgroundColor};
  z-index: 2;
  display: grid;
  grid-template-rows: 70% 30%;
  overflow: hidden;
  animation: 250ms ${popInScaleCentered} ease-in-out;
  @media (min-width: 1024px) {
    width: 40vw;
  }
`;
// Head of modal
export const StyledModalHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
  padding-right: 20%;
  background-color: ${(props) => props.theme.modalBackgroundColor};
`;
// Title of Head of modal
export const StyledModalTitle = styled.p`
  margin: 0px;
  font-size: ${(props) => props.theme.textFontSize};
  font-family: ${(props) => props.theme.modalFontFamily};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
// Paragraph of Head of modal
export const StyledModalP = styled.p`
  margin: 0px;
  text-align: center;
  font-family: ${(props) => props.theme.modalFontFamily};
  font-size: ${(props) => props.theme.textFontSize};
`;
// Footer of modal
export const StyledModalFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid ${(props) => props.theme.modalDivider};
`;
// Buttons of Footer of modal
export const StyledModalBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-weight: 500;
  font-family: ${(props) => props.theme.modalFontFamily};
  font-size: ${(props) => props.theme.textFontSize};
  background-color: ${(props) => props.theme.modalBtnBackgroundColor};
  border-left: ${(props) =>
    props.borderLeft ?? `1px solid ${props.theme.modalDivider}`};
`;
