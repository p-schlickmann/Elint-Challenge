import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/powered.png";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="200px" alt="powered by elint" />
        </Link>
      </nav>

      <div style={{ display: "flex", marginRight: "20px" }}>
        <Link
          to="/"
          style={{
            fontSize: "30px",
            color: "var(--color-primary-dark)",
            marginLeft: "30px",
          }}
        >
          <i class="fa fa-home" style={{ marginRight: "10px" }}></i>
          Home
        </Link>

        <Link
          to="/upload"
          style={{
            fontSize: "30px",
            color: "var(--color-primary-dark)",
            marginLeft: "30px",
          }}
        >
          <i class="fa fa-upload" style={{ marginRight: "10px" }}></i>
          Try it out
        </Link>

        <Link
          to="/how"
          style={{
            fontSize: "30px",
            color: "var(--color-primary-dark)",
            marginLeft: "30px",
          }}
        >
          <i class="fa fa-cogs" style={{ marginRight: "10px" }}></i>
          How it works
        </Link>
      </div>
    </nav>
  );
};

export default Header;
