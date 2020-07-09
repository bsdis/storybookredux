import React from "react";
import FracTable from "../components/FracHitTable";
import { withProvider } from '../../.storybook/decorators'

export default {
  title: "FrachitPanel",
  component: FracTable,
  decorators: [withProvider],
};

export const FracHitTable = () => <FracTable />
