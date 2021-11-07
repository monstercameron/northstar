import React, { useContext } from "react";
import { Context } from "../../store/store";
import { main } from "./index.module.css";
import { useHistory } from "react-router-dom";

export const Header = (props) => {
  let history = useHistory();

  const { store, actions } = useContext(Context);
  console.log(store, actions);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={`container-fluid m-0 p-2 pt-3 ${main}`}>
      <div className="row">
        <div className="col-2" onClick={goBack}>
          <span className="material-icons text-white">keyboard_backspace</span>
        </div>
        <div className="col-8"><h3 className='text-white text-center'>freshBONDS</h3></div>
        <div className="col-2">empty</div>
      </div>
    </div>
  );
};

export const Footer = (props) => {
  let history = useHistory();

  const { store, actions } = useContext(Context);
  console.log(store, actions);

  const goHome = () => {
    history.push("/");
  };

  return (
    <div className={`container-fluid m-0 p-2 pt-3 p-3 ${main}`}>
      <div className="row align-items-center text-center text-white">
        <div className="col" onClick={goHome}>
          <span className="material-icons">
            home
          </span>
        </div>
        <div className="col">
          <span className="material-icons">
            menu_book
          </span>
        </div>
        <div className="col">
          <span className="material-icons">
            emoji_events
          </span>
        </div>
        <div className="col">
          <span className="material-icons">
            account_circle
          </span>
        </div>
      </div>
    </div>
  );
};

