import React, { useState, useEffect } from "react";
import { frachitActions, AppDispatch, selectFracHits } from "../../store";
import { useSelector, useDispatch } from "react-redux";
const FracHitTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const test = useSelector(selectFracHits)
  return <div>{"some content"} {JSON.stringify(test, null, 2)}</div>;
};

export default FracHitTable;
