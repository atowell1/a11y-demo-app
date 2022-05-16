import * as React from "react";
import backtothefuture from "./assets/backtothefuture.png";
import Button from "@mui/material/Button";


export default function Images() {
  return (
    <body class="row">
        <div class="column bad ">
          <h2>Bad</h2>
          <img
            src={backtothefuture}
            alt="Back to the Future Movie Poster"
          ></img>
          <div class="divButton" type="button" tabindex="0" alt-text="submit">
            Submit
          </div>
        </div>
        <div class="column better ">
          <h2>Better</h2>
          
          <img
            src={backtothefuture}
            alt="Image of the Back to the Future Movie Poster"
          ></img>
          <button class="mdc-button mdc-button--outline">Submit</button>
        </div>

        <div class="column best">
          <h2>Best</h2>
          <img src={backtothefuture} alt=""></img>
          <Button className="realButton" variant="outlined">
            Submit
          </Button>
        </div>
      </body>
  );
}
