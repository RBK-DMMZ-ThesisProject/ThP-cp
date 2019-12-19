import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./../components/LandingPage.js";

it("LandingPage component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
