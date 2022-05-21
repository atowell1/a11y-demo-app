import * as React from "react";
import backtothefuture from "./assets/backtothefuture.png";


export default function AltText() {
  return (
    <body class="row">
        <div class="column bad ">
          <h2>Bad</h2>
          <img
            src={backtothefuture}
            alt="Back to the Future Movie Poster"
          ></img>
        </div>
        <div class="column better ">
          <h2>Better</h2>
          
          <img
            src={backtothefuture}
            alt="Image of the Back to the Future Movie Poster"
          ></img>
        </div>

        <div class="column best">
          <h2>Best</h2>
          <img src={backtothefuture} alt=""></img>

        </div>
      </body>
  );
}
