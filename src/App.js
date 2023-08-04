import React from "react";
import './App.css';
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        <h1 className="mb-5">Users:</h1>
      </div>
    </>
  );
}

export default App;
