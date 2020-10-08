import React from "react";

export default () => {
  return (
    <div style={{ margin: "25px" }}>
      <h1>How does it work?</h1>
      <br />
      <h2>
        The application has two separate parts. The Back-end & The Front-end.
      </h2>
      <br />
      <h3>
        The Back-end is responsible for transcribing your calls. We use machine
        learning to convert audio data into text, being able to distinguish
        between which individuals are speaking and what they're saying as the
        conversation goes on.
      </h3>
      <br />
      <h3>
        The Front-end is the interface, this website. It communicates with the
        Back-end through HTTP requests.
      </h3>
    </div>
  );
};
