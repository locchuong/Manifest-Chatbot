import React, { useContext, useState, useEffect } from "react";

// Import questions constant
import { questions } from "../constants/Questions";

// Create context
const GlobalContext = React.createContext();

// Create handler
export function useGlobal() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  // Denotes when chat bot is typing
  const [isBotTyping, setIsBotTyping] = useState(true);
  // Denotes when user is typing
  const [isUserTyping, setIsUserTyping] = useState(false);
  // Denotes the history of the chat
  const [history, setHistory] = useState([]);
  // Denotes the current question from chat bot
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // Denotes the show state of the restart modal
  const [showRestartModal, setShowRestartModal] = useState(false);
  // Denotes the show state of the edit modal
  const [showEditModal, setShowEditModal] = useState(false);
  // Denotes the question number of the edit to edit when edit modal confirmed
  const [questionToEdit, setQuestionToEdit] = useState(0);
  // Denotes the height of the User Response Footer
  const [userResponseHeight, setUserResponseHeight] = useState(0);
  // Denotes if the introduction is animation (Bot starts typing if this is false)
  const [isIntroAnimating, setIsIntroAnimating] = useState(true);

  // Restarts the chat to the initial state
  const restartChat = () => {
    setIsBotTyping(true);
    setIsUserTyping(false);
    setHistory([]);
    setCurrentQuestion(0);
  };

  // Restarts the chat to a specific question
  const updateAnswer = () => {
    setHistory((prev) => {
      let temp = prev.slice(0, questionToEdit * 2);
      console.log(temp);
      return temp;
    });
    setCurrentQuestion(questionToEdit);
    setIsBotTyping(true);
    setIsUserTyping(false);
  };

  // Handles updating current questiom from chat box when incremented
  useEffect(() => {
    if (currentQuestion < questions.length) {
      setIsUserTyping(false);
      setIsBotTyping(true);
      setHistory((prev) => {
        if (!prev) return [questions[currentQuestion]];
        let temp = prev.slice(0);
        temp.push(questions[currentQuestion]);
        return temp;
      });
    } else {
      setIsUserTyping(true);
    }
  }, [currentQuestion]);

  // Functions to export using useGlobal() function
  const value = {
    isBotTyping,
    setIsBotTyping,
    questions: questions,
    currentQuestion,
    setCurrentQuestion,
    history,
    setHistory,
    isUserTyping,
    setIsUserTyping,
    restartChat,
    showRestartModal,
    setShowRestartModal,
    updateAnswer,
    showEditModal,
    setShowEditModal,
    questionToEdit,
    setQuestionToEdit,
    userResponseHeight,
    setUserResponseHeight,
    isIntroAnimating,
    setIsIntroAnimating,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
