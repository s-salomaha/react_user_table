import React from "react";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { JsonServerState } from "./context/jsonServer/JsonServerState";
import { Alert } from "./components/Alert";
import { Home } from "./pages/Home";
import "./App.css";

function App() {
  return (
    <AlertState>
      <JsonServerState>
        <Navbar />
        <div className="container pt-4">
          <Alert />
          <Home />
        </div>
      </JsonServerState>
    </AlertState>
  );
}

export default App;
