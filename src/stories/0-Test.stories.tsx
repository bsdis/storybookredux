import React, { useContext } from "react";
import { addDecorator } from "@storybook/react";
import FracTable from "../components/FracHitTable";
import { Provider, useDispatch } from "react-redux";
import { store, frachitActions, AppDispatch } from "../store";

export default {
  title: "FrachitPanel",
  component: FracTable,
};

export const FracHitTable = () => {
  const dispatch: AppDispatch = useDispatch();
  /*
  dispatch(
    frachitActions.addHitThunk([
      0,
      new Date(2020, 11, 24, 10, 33, 30).getTime(),
      459.45,
      1,
      new Date(2020, 11, 24, 10, 33, 30).getTime(),
      new Date(2020, 11, 24, 10, 33, 30).getTime(),
      "",
    ])
  ); 
  dispatch(
    frachitActions.addHitThunk([
      1,
      new Date(2020, 11, 24, 10, 33, 30).getTime(),
      469.45,
      1,
      new Date(2020, 11, 24, 10, 33, 30).getTime(),
      new Date(2020, 11, 24, 10, 33, 30).getTime(),
      "",
    ])
  );
  dispatch(
    frachitActions.addHitThunk([
      2,
      new Date(2020, 11, 24, 10, 33, 30).getTime(),
      479.45,
      1,
      new Date(2020, 11, 24, 10, 33, 30).getTime(),
      new Date(2020, 11, 24, 10, 33, 30).getTime(),
      "",
    ])
  );*/

  return (
    <div style={{ display: "flex" }}>
      <FracTable />
    </div>
  );
};
