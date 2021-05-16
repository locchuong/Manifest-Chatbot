import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobal } from "../contexts/GlobalContext";
import { growIn, bounce, popIn } from "../constants/Keyframes";
import botIcon from "../media/61.png";

// Denotes the time (in ms) of bot typing message
const typingSpeed = 2000;

// Denotes the delay between bot finished typing and showing user options;
const finishedDelay = 500;

// Wrapper for entire chat message
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  animation: 1s ${growIn} ease-in forwards;
`;
// Chat bot icon image container (With set size)
const StyledIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;
// Chat bot icon image (Animations)
const StyledIcon = styled.img`
  width: 0px;
  height: 0px;
  animation: 250ms ${popIn(50, 50, 5)} cubic-bezier(0, 1, 1, 1) forwards 250ms;
`;
// Wrapper for chat bubbles (With set size)
const StyledBubbleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 40px;
  overflow: hidden;
  border-radius: 5px;
  color: #000000;
  margin-bottom: 0.5rem;
`;
// Container for chat bubbles (Animations)
const StyledBubbleGroup = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ebebeb;
  align-items: center;
  width: 0px;
  height: 0px;
  animation: 250ms ${popIn(50, 40, 5)} cubic-bezier(0, 1, 1, 1) forwards 250ms;
`;
// Single Chat bubble
const StyledBubble = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  width: 10px;
  height: 10px;
  border-radius: 100%;
  transform: translateY(-2.5px);
  opacity: ${(props) => {
    return props.startY < 0 ? 0.3 : props.startY === 0 ? 0.7 : 1;
  }};
  animation: 1s ${(props) => bounce(props.startY)} infinite ease-in-out 250ms;
`;
// Container for multiple chat messages
const StyledMultiMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-width: 50px;
  max-width: 75%;
  word-break: break-word;
  word-wrap: break-word;
  background-color: ${(props) => props.theme.backgroundColor};
  overflow: hidden;
  border-radius: 5px;
  color: #000000;
  margin-left: 0.5rem;

  // Handles chat bubble grouping together as children are appended
  > :first-child {
    border-radius: 1rem 1rem 1rem 0px; This is bottom left
  }  
  > :last-child {
    border-radius: 0px 1rem 1rem 1rem; 
  }
  > :not(:first-child):not(:last-child) {
    border-radius: 0px 1rem 1rem 0px;
  }
  > :only-child {
    border-radius: 1rem;
  }
`;
// Container for chat single message
const StyledMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 50px;
  max-width: 100%;
  word-break: break-word;
  word-wrap: break-word;
  background-color: ${(props) => props.theme.secondaryColor};
  overflow: hidden;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  animation: 1s ${growIn} ease-in forwards;
`;
// Styled text for chat messages
const StyledMessage = styled.div`
  font-family: ${(props) => props.theme.primaryFontFamily};
  font-size: ${(props) => props.theme.textFontSize};
  color: ${(props) => props.theme.primaryTextColor};
`;

export const BotMessage = (props) => {
  // Denotes Global state of Bot typing all messages
  const { setIsBotTyping } = useGlobal();
  // Denotes when Local state of Bot typing single message
  const [isAnimatingBubble, setisAnimateBubble] = useState(true);
  // Denotes messages that Bot has sent
  const [previousMessages, setPreviousMessages] = useState([]);
  // Denotes the current message the Bot is typing
  const [messageIndex, setMessageIndex] = useState(0);
  // Denotes when bot has finished typing all messages

  // Handles bot typing and appending messages
  useEffect(() => {
    // If bot not currently typing, append message if there are still messages
    if (!isAnimatingBubble && !props.message) {
      // Append Message
      setPreviousMessages((prev) => {
        if (!prev) return [props.messages[messageIndex]];
        let temp = prev.slice(0);
        temp.push(props.messages[messageIndex]);
        return temp;
      });
      // If there are messages remaining, set a timer to restart typing
      if (messageIndex + 1 < props.messages.length) {
        var restartTimeout = setTimeout(() => {
          setisAnimateBubble(true);
        }, typingSpeed);
      }
      // Otherwise, finished animations
      else {
        var finishedTimeout = setTimeout(() => {
          setIsBotTyping(false);
        }, finishedDelay);
      }
      // Increment message indexer
      setMessageIndex((prev) => prev + 1);
    }
    // If bot is currently typing, wait before appending message
    else {
      var typingTimeout = setTimeout(() => {
        setisAnimateBubble(false);
      }, typingSpeed);
    }
    // Cleanup Timeouts
    return () => {
      clearTimeout(restartTimeout ?? null);
      clearTimeout(finishedTimeout ?? null);
      clearTimeout(typingTimeout ?? null);
    };
    // Do not add to dependency array due to infinite rerender
  }, [isAnimatingBubble]);

  // Scroll to bottom each time bot message is rerendered
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  return (
    // Main Wrapper
    <StyledWrapper>
      {/* Bot Icon */}
      <StyledIconContainer>
        {/* <button onClick={() => console.log(history)}>show</button> */}
        <StyledIcon alt="botIcon" src={botIcon} width="50px" height="50px" />
      </StyledIconContainer>
      {/* All messages (Initially empty) */}
      <StyledMultiMessageContainer>
        {/* Past Messages */}
        <>
          {previousMessages &&
            previousMessages.map((val, idx) => {
              return (
                <StyledMessageContainer key={idx}>
                  <StyledMessage>{val}</StyledMessage>
                </StyledMessageContainer>
              );
            })}
        </>
        {/* Bot typing animaton */}
        {isAnimatingBubble && (
          <StyledBubbleWrapper>
            <StyledBubbleGroup>
              <StyledBubble startY={-2.5}></StyledBubble>
              <StyledBubble startY={0.0}></StyledBubble>
              <StyledBubble startY={2.5}></StyledBubble>
            </StyledBubbleGroup>
          </StyledBubbleWrapper>
        )}
      </StyledMultiMessageContainer>
    </StyledWrapper>
  );
};
