import * as React from "react";
import backtothefuture from "./assets/backtothefuture.png";


export default function Images() {
  return (
    <div class="row">
      <div class="column ">
        <img src={backtothefuture} alt="Back to the Future Movie Poster"></img>
      </div>
      <div class="column">
        <img src={backtothefuture} alt=""></img>
        <figcaption>Back to the Future Movie Poster</figcaption>
      </div>
      <div class="column">
        <img
          src={backtothefuture}
          alt="Image of the Back to the Future Movie Poster"
        ></img>
      </div>
    </div>
  );
}
