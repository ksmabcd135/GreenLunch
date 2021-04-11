//複数のreducerを渡すために
import { combineReducers } from "redux";

export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export default combineReducers({
  replaceMe: () => "replace me!",
});
