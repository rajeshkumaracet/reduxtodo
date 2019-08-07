import React from "react";
import "./App.css";
import AddToDoComponent from "./components/AddToDoComponent";
import ListComponent from "./components/ListComponent";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="card m-5">
      <AddToDoComponent />
      <ListComponent />
    </div>
  );
}

export default App;
