import React, { useState } from "react";

import "./FileUploader.css";

const FileUploader = () => {
  const [files, setFiles] = useState(null);
  const [fileUploaders, setUploaders] = useState([{ key: 0 }]); // one uploader at initialization

  console.log(files);

  const onFileSelect = (e, uploaderKey) => {
    setFiles(e.target.files.forEach);
    setFiles(e.target.files);
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{ textAlign: "center", fontSize: "3.5rem", marginTop: "50px" }}
      >
        Upload your files
      </h1>
      <br />
      <div className="container">
        <div
          className="row"
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="col-md-6">
            <form method="post" action="#" id="#">
              <div className="form-group files">
                <input type="file" className="form-control" multiple />
              </div>
            </form>
          </div>
        </div>
      </div>
      <button className="btn btn-info">Transcribe now!</button>
    </div>
  );
};

export default FileUploader;
