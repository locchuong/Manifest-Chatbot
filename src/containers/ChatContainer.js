import React from "react";
import styled from "styled-components";
import { BotMessage } from "../components/BotMessage";
import { UserMessage } from "../components/UserMessage";
import { Introduction } from "../components/Introduction";
import { useGlobal } from "../contexts/GlobalContext";

// Define the Chat Container
const StyledChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  margin-top: 8vh;
  // Responsively change margin-bottom based on user response's height
  margin-bottom: calc(${(props) => props.marginBottom}px + 1vh);
  padding-left: 5%;
  padding-right: 5%;
`;

export const ChatContainer = () => {
  // Get method(s) from global context
  const { history, userResponseHeight, isIntroAnimating } = useGlobal();

  return (
    <StyledChatContainer marginBottom={userResponseHeight}>
      <Introduction></Introduction>
      {!isIntroAnimating &&
        history &&
        history.map((value, index) => {
          // Message in history is by bot
          if (value.type === "bot") {
            return (
              <BotMessage messages={value?.messages} key={index}></BotMessage>
            );
          }
          // Message in history is by user
          else {
            return (
              <UserMessage
                messages={value?.messages}
                question={value?.question}
                key={index}
              ></UserMessage>
            );
          }
        })}
    </StyledChatContainer>
  );
};
