import React from "react";
import './App.css';
import { Navbar } from "./components/Navbar";
import { Table } from "./components/Table";

function App() {
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        <h1 className="mb-5">Users:</h1>
        <Table />
        <button type="button" className="btn btn-primary mt-4">Add new user</button>
      </div>
    </>
  );
}

export default App;
