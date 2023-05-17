import { ACTIONS } from "./actions";

export const keys = [
    { sign: "AC", style: "span-two", doAction: `${ACTIONS.CLEAR}` },
    { sign: "DEL", style: "", doAction: `${ACTIONS.DELETE_DIGIT}` },
    { sign: "÷", style: "", doAction: `${ACTIONS.CHOOSE_OPERATION}` },
    { sign: "1", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "2", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "3", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "*", style: "", doAction: `${ACTIONS.CHOOSE_OPERATION}` },
    { sign: "4", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "5", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "6", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "+", style: "", doAction: `${ACTIONS.CHOOSE_OPERATION}` },
    { sign: "7", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "8", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "9", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "-", style: "", doAction: `${ACTIONS.CHOOSE_OPERATION}` },
    { sign: ".", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "0", style: "", doAction: `${ACTIONS.ADD_DIGIT}` },
    { sign: "=", style: "span-two", doAction: `${ACTIONS.EVALUATE}` },
  ];