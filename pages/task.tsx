import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import activeProblem from "../redux/actions";

interface Props {}

export default function Task({}: Props): ReactElement {
  const dispatch = useDispatch();
  const activeProblemReducer = useSelector(
    (state) => state.activeProblemReducer
  );

  React.useEffect(() => {
    dispatch(activeProblem.activeProblem());
  }, []);
  return <div>{JSON.stringify(activeProblemReducer.data)}</div>;
}
