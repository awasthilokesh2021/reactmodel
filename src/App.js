import React, { createContext, useState } from "react";
import "./App.css";
//import Modal from "./Components/Modal";
import ModalVal from "./Components/ModalVal";
import Useeff from "./Components/Useeff";

const context = createContext;


function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
      {modalOpen && <ModalVal setOpenModal={setModalOpen} />}
      <br></br>
      <br></br>
      <Useeff />
    </div>
  );
}

export default App;