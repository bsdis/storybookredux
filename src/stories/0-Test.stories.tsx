import React from "react";
import FracTable from "../components/FracHitTable";
import { withProvider } from '../../.storybook/decorators'
import { createStore } from "../store";

export default {
  title: "FrachitPanel",
  component: FracTable,
};

// being that each table is supposed to show different data, we can just initialize the store with different data
export const FracHitTable = () => withProvider(createStore({ preloadedState: { frachits: [[0,1,2,3,4,5,'injected'], [0,1,2,3,4,5,'thing']]}}))(<FracTable />)
export const FracHitTable2 = () => withProvider(createStore({ preloadedState: { frachits: [[0,1,2,3,4,5,'thing']]}}))(<FracTable />)
