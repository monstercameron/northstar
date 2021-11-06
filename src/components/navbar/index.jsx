import React, { useContext } from "react";
import { Context } from "../../store/store";
import { main } from "./index.module.css";

export const Header = (props) => {
  const { store, actions } = useContext(Context);
  console.log(store, actions);

  return (
    <div className={`container-fluid m-0 p-2 pt-3 ${main}`}>
      <div className="row">
        <div className="col-2">
          <span className="material-icons text-white">keyboard_backspace</span>
        </div>
        <div className="col-8"><h3 className='text-white text-center'>freshBONDS</h3></div>
        <div className="col-2">empty</div>
      </div>
    </div>
  );
};

export const Footer = (props) => {
  const { store, actions } = useContext(Context);
  console.log(store, actions);

  return (
    <div className={`container-fluid m-0 p-2 pt-3 p-3 ${main}`}>
      <div className="row align-items-center text-center text-white">
        <div className="col">
          <span class="material-icons">
            home
          </span>
        </div>
        <div className="col">
          <span class="material-icons">
            group
          </span>
        </div>
        <div className="col">
          <span class="material-icons">
            emoji_events
          </span>
        </div>
      </div>
    </div>
  );
};

