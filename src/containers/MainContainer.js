import React from "react";
import styled from "styled-components";
import { useGlobal } from "../contexts/GlobalContext";
import { Navbar } from "./Navbar";
import { ChatContainer } from "./ChatContainer";
import { UserResponse } from "./UserResponse";

// Import StyledModal constants
import {
  StyledModalContainer,
  StyledModalHead,
  StyledModalTitle,
  StyledModalP,
  StyledModalFooter,
  StyledModalBtn,
} from "../constants/StyledModal";

// Define the Styled Main Container for the application
const StyledMainContainer = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// Define the Styled Blur Wrapper (Active when modal is open to blur backdrop)
const StyledBlurWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
  position: ${(props) => (props.isModalOpen ? `fixed` : `static`)};
  pointer-events: ${(props) => (props.isModalOpen ? `none` : `auto`)};
  filter: ${(props) =>
    props.isModalOpen ? `brightness(25%) blur(5px)` : `none`};
  backdrop-filter: ${(props) => (props.isModalOpen ? `blur(5px)` : `none`)};
`;
export const MainContainer = () => {
  const {
    isBotTyping,
    history,
    isUserTyping,
    showRestartModal,
    setShowRestartModal,
    restartChat,
    showEditModal,
    setShowEditModal,
    updateAnswer,
  } = useGlobal();

  return (
    <StyledMainContainer>
      {/* Blur Wrapper (Blur if Modal Opened) */}
      <StyledBlurWrapper isModalOpen={showRestartModal || showEditModal}>
        {/* Navbar of Chat */}
        <Navbar />
        {/* Chat Functionality */}
        <ChatContainer />
        {/* User Response */}
        {!isBotTyping && !isUserTyping && (
          <UserResponse
            options={history[history.length - 1].options}
            datePicker={history[history.length - 1]?.datePicker}
            isLastQuestion={history[history.length - 1]?.isLastQuestion}
          ></UserResponse>
        )}
      </StyledBlurWrapper>
      {/* Restart Modal */}
      {showRestartModal && (
        <StyledModalContainer>
          <StyledModalHead>
            <StyledModalTitle>WANT TO START OVER?</StyledModalTitle>
            <StyledModalP>
              {" "}
              This will clear your answers and start again from the beginning
            </StyledModalP>
          </StyledModalHead>
          <StyledModalFooter>
            <StyledModalBtn
              borderLeft
              onClick={() => setShowRestartModal(false)}
            >
              Cancel
            </StyledModalBtn>
            <StyledModalBtn
              onClick={() => {
                restartChat();
                setShowRestartModal(false);
              }}
            >
              Start Over
            </StyledModalBtn>
          </StyledModalFooter>
        </StyledModalContainer>
      )}
      {/* Edit Modal */}
      {showEditModal && (
        <StyledModalContainer>
          <StyledModalHead>
            <StyledModalTitle>WANT TO EDIT ANSWER?</StyledModalTitle>
            <StyledModalP>
              {" "}
              This will clear your answer and start again from this question
            </StyledModalP>
          </StyledModalHead>
          <StyledModalFooter>
            <StyledModalBtn borderLeft onClick={() => setShowEditModal(false)}>
              Cancel
            </StyledModalBtn>
            <StyledModalBtn
              onClick={() => {
                updateAnswer();
                setShowEditModal(false);
              }}
            >
              Edit Answer
            </StyledModalBtn>
          </StyledModalFooter>
        </StyledModalContainer>
      )}
    </StyledMainContainer>
  );
};
