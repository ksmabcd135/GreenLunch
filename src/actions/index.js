//複数のreducerを渡すために
import { combineReducers } from "redux";

export const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

export default combineReducers({
  replaceMe: () => "replace me!",
});
