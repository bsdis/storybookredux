import React, { useState, useEffect } from "react";
import { frachitActions, AppDispatch, RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
const FracHitTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  return <div>{"some content"}</div>;
};

export default FracHitTable;
