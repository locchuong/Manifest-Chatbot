import styled from "styled-components";

// Styled P tag for bot message
const StyledP = styled.p`
  font-size: ${(props) => props.theme.textFontSize};
  margin: 0px;
`;

// Styled Strong tag for bot message
const StyledStrong = styled.strong`
  font-size: ${(props) => props.theme.textFontSize};
  font-weight: 600;
  color: ${(props) => props.theme.primaryColor};
  margin: 0px;
`;

// Initialize questions for bot to ask user
// @ type - indicates whether the message is by "bot" or "user"
// @ messages - array of messages for bot to append to chat
// @ options - array of options given to user to respond to messages
// @ isDatePicker - indicates whether a date picker should appear for user response
// @ isLastQuestion - indicates whether the user response button should restart chat
export const questions = [
  {
    type: "bot",
    messages: [
      "Hi! I'm Henry, your personal transfer specialist.",
      "Nice work deciding to consolidate your retirement accounts. Choosing the right account can be hard. Luckily, I'm here to help!",
      "Tell me, do you have at least 6 months of personal savings outside of your retirement accounts?",
    ],
    options: ["Yes", "No"],
  },
  {
    type: "bot",
    messages: [
      "Some retirement plans allow you to take out loans. Is this feature important to you?",
    ],
    options: ["Yes", "Not Really"],
  },
  {
    type: "bot",
    messages: [
      "There are 2 types of investors:",
      <StyledP>
        <StyledStrong>Active</StyledStrong> investors prefer to frequently
        monitor their investment choices, adjust allocations, and follow the
        market.
      </StyledP>,
      <StyledP>
        <StyledStrong>Passive</StyledStrong> investors like their investments to
        be managed for them.
      </StyledP>,
      "Which one best describes you?",
    ],
    options: ["Active", "Passive"],
  },
  {
    type: "bot",
    messages: [
      "We are required by your provider to collect some identity information",
      "What is your Date of Birth?",
    ],
    options: ["Confirm"],
    datePicker: true,
  },
  {
    type: "bot",
    messages: [
      "Thank you for walking me through your preferences. This will make it much easier for us to choose the right destination for you.",
    ],
    options: ["Continue"],
    isLastQuestion: true,
  },
];
