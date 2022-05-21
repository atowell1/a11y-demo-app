import * as React from "react";
import backtothefuture from "./assets/backtothefuture.png";
import { CodeBlock, nord } from "react-code-blocks";

const code1 =
  ("text",
  `<img src={backtothefuture}
      alt="Image of the Back to the Future Movie Poster"  >
  </img>`);

const code2 = (
  'text',
  `<img src={backtothefuture}
    alt="Back to the Future Movie Poster">
  </img>`
);

const code3 = (
  'text',
  `<img src={backtothefuture} 
    alt="">
  </img>`
)
export default function AltText() {
  return (
    <body class="row">
      <div class="column ">
        <h2>Bad</h2>
        <img
          src={backtothefuture}
          alt="Image of the Back to the Future Movie Poster"
        ></img>
        <br></br>
        <CodeBlock
          className="codeBlock"
          theme={nord}
          language={"javascript"}
          text={code1}
        />
      </div>
      <div class="column ">
        <h2>Better</h2>

        <img src={backtothefuture} alt="Back to the Future Movie Poster"></img>
        <br></br>
        <CodeBlock
          className="codeBlock"
          theme={nord}
          language={"javascript"}
          text={code2}
        />
      </div>

      <div class="column">
        <h2>Best</h2>
        <img class="imageBest" src={backtothefuture} alt=""></img>
        <p class="caption">
          Released in 1985, Back to the Future is a Sci-fi Comedy staring
          Michael J. Fox and directed by Robert Zemeckis.
        </p>
        <CodeBlock
          className="codeBlock"
          theme={nord}
          language={"javascript"}
          text={code3}
        />
      </div>
    </body>
  );
}
