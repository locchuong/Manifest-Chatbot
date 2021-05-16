import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useGlobal } from "../contexts/GlobalContext";
import { slideInFromBottom } from "../constants/Keyframes";
import DatePicker from "react-date-picker";

// User Response wrapper
const StyledUserResponse = styled.form`
  position: fixed;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: ${(props) => (props.isDatePicker ? "column" : "row")};
  align-items: center;
  justify-content: space-evenly;
  bottom: 0px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-top: 1px solid ${(props) => props.theme.backgroundDivider};
  animation: 250ms ${slideInFromBottom} ease-in-out;
  padding: 1rem;
`;

// User Response reply buttons
const StyledUserResponseBtn = styled.button`
  height: clamp(30px, 6vh, 56px);
  width: clamp(150px, 30vw, 300px);
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  border-radius: 0.5rem;
  font-family: ${(props) => props.theme.primaryFontFamily};
  font-size: ${(props) => props.theme.buttonFontSize};
  color: ${(props) => props.theme.secondaryTextColor};
  font-weight: ${(props) => props.theme.buttonFontWeight};
`;

export const UserResponse = (props) => {
  // Get method(s) from Global context
  const {
    setHistory,
    setCurrentQuestion,
    currentQuestion,
    setUserResponseHeight,
    restartChat,
  } = useGlobal();

  // Reference to the main wrapper
  const wrapperRef = useRef();
  // Date picker value (if applicable)
  const [dateValue, setDateValue] = useState(new Date());
  // Value to append to chat (User's response)
  const [currentValue, setCurrentValue] = useState();

  // Formats date object to MM/DD/YYYY
  const getDateString = (date) => {
    const year = date.getFullYear();
    const month = (1 + date.getMonth()).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${month}/${day}/${year}`;
  };

  // Handles submission of user response, appends currentValue to chat
  const handleSubmit = (e) => {
    e.preventDefault();
    setHistory((prev) => {
      let temp = prev.slice();
      temp.push({
        type: "user",
        messages: [currentValue],
        question: currentQuestion,
      });
      return temp;
    });
    // Increment current question
    setCurrentQuestion((prev) => prev + 1);
  };

  // Scroll to bottom each time user response is rerendered
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Store height of user response div to use as margin-bottom for chat container
  useEffect(() => {
    setUserResponseHeight(wrapperRef.current.clientHeight);
  }, [setUserResponseHeight]);

  return (
    <StyledUserResponse
      ref={wrapperRef}
      isDatePicker={props?.datePicker}
      onSubmit={(e) => handleSubmit(e)}
    >
      {/* Date Picker (if applicable)*/}
      {props.datePicker && (
        <div style={{ marginBottom: "1rem" }}>
          <DatePicker
            onChange={setDateValue}
            value={dateValue}
            disableCalendar={true}
            monthPlaceholder={"mm"}
            dayPlaceholder="dd"
            yearPlaceholder={"yyyy"}
            maxDate={new Date()}
            required={true}
          />
        </div>
      )}
      {/* Render each option choice */}
      {props.options &&
        props.options.map((value, index) => {
          return (
            <StyledUserResponseBtn
              key={index}
              type="submit"
              onClick={() => {
                // Restart chat on last question
                if (props?.isLastQuestion) restartChat();
                // Otherwise, set current value of user's message to append
                else
                  setCurrentValue(
                    props?.datePicker && dateValue
                      ? getDateString(dateValue)
                      : value
                  );
              }}
            >
              {value}
            </StyledUserResponseBtn>
          );
        })}
    </StyledUserResponse>
  );
};
