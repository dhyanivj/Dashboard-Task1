import React from "react";
import "./styles.css";
import Chart from "./charts/chart";
import Sidebar from "./sidebar/sidebar";
export default function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Responsive Dash<span className="blue">board</span> UI
        </h1>
        <h4>
          (Task 01) By{" "}
          <span className="blue">
            <a href="https://www.linkedin.com/in/imvjdhyani/">Vijay Dhyani</a>
          </span>
        </h4>
      </header>
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="chats">
          <Chart />
        </div>
      </div>
    </div>
  );
}
