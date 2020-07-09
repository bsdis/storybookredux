import React, { useContext } from "react";
import { Provider, useDispatch } from "react-redux";
import { addDecorator } from "@storybook/react";
import { store } from "../src/store";

const styles = {
  textAlign: "center",
  backgroundColor: "red",
};
const Center = ({ children }) => <div style={styles}>{children}</div>;
addDecorator((storyFn) => (
  <Provider store={store}>
    <Center>{storyFn()}</Center>
  </Provider>
));

//const Center = ({ children }) => <div style={styles}>{children}</div>;

//addDecorator((storyFn) => <Center>{storyFn()}</Center>);

//addDecorator(withA11y);
