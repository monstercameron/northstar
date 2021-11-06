import React, { useState, useContext } from "react";
import { Context } from "../../store/store";

const Index = () => {
  const { store, actions } = useContext(Context);
  console.log(store, actions);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
    console.log(`the count: ${count}`);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          test
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={handleClick}>
                Blog
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
