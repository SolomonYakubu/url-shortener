import React from "react";

import { useHistory } from "react-router-dom";

export default function Header() {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  const history = useHistory();
  return <></>;
}
