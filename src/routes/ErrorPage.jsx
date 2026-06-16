import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Ops!</h1>
      <p>temos um poblema</p>
      <p>{error.statusText}</p>
      <p>{error.error.message}</p>
    </div>
  );
};
