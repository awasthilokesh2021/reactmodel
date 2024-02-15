import React from "react";
import './modalval.css'

const ModalVal = ({ setOpenModal }) => {
  return (
    <>
      <div className="modalBackground">
        <div className= "modalContainer">
          <div>
            <button 
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="formcontrol">
              <input type="text" placeholder="full name" />
              <input type="text" placeholder="password" />
              <input type="text" placeholder="confirm password" />
              <input type="text" placeholder="phone no" />
              <div className="btn">
              <button>Submit</button>
              <button
                onClick={() => {
                    setOpenModal(false);
                  }}
              >cancel</button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalVal;
