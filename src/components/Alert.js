import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <>
      {alert.visible && (<div className={`alert alert-${alert.type || "warning"} alert-dismissible d-flex mb-4`}>
        <span className='pe-2 flex-grow-1'>{alert.text}</span>
        <button onClick={hide} type="button" className="btn btn-light btn-sm" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>)}
    </>
  );
};