import React from "react";
import styled from "styled-components";
import { useGlobal } from "../contexts/GlobalContext";
import editIcon from "../media/Edit.png";
import { growIn } from "../constants/Keyframes";

// Main wrapper for user message
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

// Main wrapper for multiple of user's messages
const StyledMultiMessageContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 50px;
  max-width: 75%;
`;

// Wrapper for single user message
const StyledMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 50px;
  max-width: 100%;
  word-break: break-word;
  word-wrap: break-word;
  background-color: ${(props) => props.theme.primaryColor};
  overflow: hidden;
  border-radius: 5px;
  font-family: ${(props) => props.theme.primaryFontFamily};
  font-size: ${(props) => props.theme.textFontSize};
  color: ${(props) => props.theme.secondaryTextColor};
  margin-left: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  animation: 1s ${growIn} ease-in;
`;

// Edit button for user message
const StyledEditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 29px;
  position: absolute;
  left: -5%;
  top: -5%;
  border-radius: 50%;
  border: none;
`;

export const UserMessage = (props) => {
  // Get method(s) from global context
  const { setShowEditModal, setQuestionToEdit } = useGlobal();

  return (
    <StyledWrapper>
      <StyledMultiMessageContainer>
        <StyledEditButton
          onClick={() => {
            setShowEditModal(true);
            setQuestionToEdit(props.question);
          }}
        >
          <img alt="editIcon" src={editIcon}></img>
        </StyledEditButton>
        <StyledMessage>{props.messages[0]}</StyledMessage>
      </StyledMultiMessageContainer>
    </StyledWrapper>
  );
};
