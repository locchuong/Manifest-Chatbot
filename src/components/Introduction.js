import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobal } from "../contexts/GlobalContext";
import { popInScale, fadeIn } from "../constants/Keyframes";
import chatBoxImg from "../media/61.png";

// Chat Bot's Name
const chatBotName = "Henry";
// Chat Bot's Company Role
const chatBotRole = "TRANSFER SPECIALIST";

// Define Bot introduction wrapper
const IntroductionWrapper = styled.div`
  height: clamp(250px, 35vh, 300px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// Define Bot image wrapper
const BotImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Define Bot image styles
const BotImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  animation: 400ms ${popInScale} ease-in-out;
`;

// Define Bot name styles
const BotName = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin: 0.5rem;
  opacity: 0;
  animation: 300ms ${fadeIn} ease-in-out 400ms forwards;
`;

// Define Bot role styles
const BotRole = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: gray;
  margin: 0.5rem;
  opacity: 0;
  animation: 200ms ${fadeIn} ease-in-out 700ms forwards;
`;

export const Introduction = () => {
  // Get method(s) from global context
  const { setIsIntroAnimating } = useGlobal();

  // Start chat bot typing starts when introduction animations finish
  useEffect(() => {
    setTimeout(() => {
      setIsIntroAnimating(false);
    }, 1200);
  }, [setIsIntroAnimating]);

  return (
    <IntroductionWrapper>
      <BotImgWrapper>
        <BotImg alt="info" src={chatBoxImg}></BotImg>
      </BotImgWrapper>
      <BotName>{chatBotName}</BotName>
      <BotRole>{chatBotRole}</BotRole>
    </IntroductionWrapper>
  );
};
