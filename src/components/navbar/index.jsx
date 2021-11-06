import React, { useState, useContext } from "react";
import { Context } from "../../store/store";

const Index = () => {
  const { store, actions } = useContext(Context);
  console.log(store, actions);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          AutoVittoriane
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
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/weight">
                Weight Reduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/costs">
                Costs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/performance">
                Performance
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/parts">
                Parts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/concepts">
                concepts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
