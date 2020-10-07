import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import loomie from "../assets/loomie.svg";

const Home = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ margin: "35px" }}>
        <p style={{ fontSize: "75px" }}>Elint's Transcriber</p>
        <div style={{ maxWidth: "60%", marginLeft: "10px" }}>
          <h1>
            The best
            <strong
              style={{
                margin: "0 15px",
                fontSize: "40px",
                color: "var(--color-secondary)",
              }}
            >
              solution
              <br />
            </strong>
            for monitoring your company's calls
          </h1>
        </div>
        <div className="buttons-container">
          <Link to="/how" className="how">
            <i class="fa fa-cogs" style={{ marginRight: "10px" }}></i>
            How it works{" "}
          </Link>
          <Link to="/upload" className="try">
            <i class="fa fa-upload" style={{ marginRight: "10px" }}></i>
            Try it out{" "}
          </Link>
        </div>
      </div>
      <img
        style={{ width: "500px", marginLeft: "50px" }}
        alt="person"
        src={loomie}
      ></img>
    </div>
  );
};

export default Home;
