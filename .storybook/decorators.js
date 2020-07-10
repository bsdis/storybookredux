import * as React from "react";
import { Provider } from "react-redux";

export const withProvider = (store) => (story) => {
  return <Provider store={store}>{story}</Provider>;
};
