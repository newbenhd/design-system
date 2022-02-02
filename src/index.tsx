import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundaries from "./utils/ui-hocs/ErrorBoundaries";

ReactDOM.render(
  <ErrorBoundaries
    fallbackComponent={<p>Something went wrong...please try it again later</p>}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundaries>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
