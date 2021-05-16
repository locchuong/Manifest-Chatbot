import React from "react";
import styled, { css } from "styled-components";
import { useGlobal } from "../contexts/GlobalContext";
import { wobble } from "../constants/Keyframes";
import MenuIcon from "../media/MenuIcon.png";

// Define the Navbar for the Main Container
const StyledNavbar = styled.div`
  position: fixed;
  width: 100vw;
  height: 8vh;
  border-bottom: 1px solid ${(props) => props.theme.backgroundDivider};
  background-color: ${(props) => props.theme.backgroundColor};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  justify-items: center;
  z-index: 1;
`;

// Define the Styled Navbar's title (Company name)
const StyledTitle = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-size: 1.25rem;
  font-weight: 600;
  grid-column-start: 2;
`;

// Define the Styled Modal Button (Opens restart modal)
const StyledModalBtn = styled.button`
  align-self: center;
  justify-self: end;
  margin: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.secondaryColor};
  &:active {
    animation: ${(props) =>
      props.historyLen === 1 && css`125ms ${wobble} ease-in`};
  }
`;

// Define the Restart Button wrapper
const ModalButton = () => {
  const { setShowRestartModal, history } = useGlobal();
  return (
    <StyledModalBtn
      historyLen={history.length}
      onClick={() => {
        if (history.length !== 1) setShowRestartModal(true);
      }}
    >
      <img alt="menuIcon" src={MenuIcon} />
    </StyledModalBtn>
  );
};

// Defien the Navbar wrapper
export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledTitle>Manifest</StyledTitle>
      <ModalButton></ModalButton>
    </StyledNavbar>
  );
};
