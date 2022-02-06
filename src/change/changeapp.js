
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { ChangeContext } from "../conetext";
import InputChange from "./inputchange";
import ViewChange from "./viewchange";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChangeApp(props) {
  let [total, setTotal] = useState(100);

  return (
    <ChangeContext.Provider value={{ total, setTotal }}>
      <ReactTooltip />
      <div id="app1" className="text-center p-4">
        <InputChange />
        <ViewChange />
      </div>
      <ToastContainer type="info" position="top-center" theme='light' />
    </ChangeContext.Provider>
  );
}

export default ChangeApp;
