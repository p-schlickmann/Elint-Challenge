import React, { useState, useEffect } from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import axios from "axios";

const Results = ({ location, history }) => {
  const [files] = useState(location.state.files);
  const [results, setResults] = useState([]);
  console.log(files);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!files) {
      console.log("oi");
      history.push("/upload");
    } else {
      files.forEach((file) => {
        const formData = new FormData();
        formData.append("audio", file);
        axios
          .post("http://18.219.108.220:5000/transcribe", formData)
          .then((res) => {
            setResults([...results, { url: res.url, name: file.name }]);
          })
          .catch((err) => {});
      });
    }
  }, [files, results, history]);

  const renderItems = () => {
    return files.map((file) => {
      const found = results.filter((result) => {
        return result.name === file.name;
      });
      console.log(found);
      return (
        <div className="form-control" style={{ marginBottom: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>{file.name}</h4>
            {found[0] ? (
              <i className="fa fa-check" />
            ) : (
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            )}

            {found[0] ? <Link to={found[0].url}>Download</Link> : null}
          </div>
        </div>
      );
    });
  };

  const renderResults = () => {
    return (
      <div style={{ marginTop: "-30px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "3.5rem",
            marginTop: "50px",
          }}
        >
          Monitor Results
        </h2>
        <div className="container">
          <div
            className="row"
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="col-md-6 ">{renderItems()}</div>
          </div>
        </div>
      </div>
    );
  };
  return files ? renderResults() : <Redirect to="/upload" />;
};

export default withRouter(Results);
