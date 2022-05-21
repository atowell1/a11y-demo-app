import * as React from "react";
import { CodeBlock, nord } from "react-code-blocks";
import Divider from '@mui/material/Divider';

import "./Aria.scss";

const code1 =
  ("text",
  `<button aria-label="Blue" aria-labelledby="color">
      Red
    </button>
  <span id="color">Yellow</span>
`);

const code2 = ("text", `<button>Yellow</button>`);

const code3 =
  ("text",
  `<button aria-label="Close" onclick="myDialog.close()">
  <svg aria-hidden="true" focusable="false" width="17"
  height="17" xmlns="http://www.w3.org/2000/svg">
  <path d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5
  .7835.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906
  -2.0922.162-5.818-5.924-5.818 5.924-2.092-2.162Z" fill
  ="#000"/></svg>
  </button>`);

const code4 = (
  'test',
  `<h2 id="attr" class="article-title">
      13 ARIA attributes you need to know
  </h2>
  <p>
    There are over 50 ARIA states and properties, but 13 of them stand
    out &helip;
    <a href="13.html" id="rm13" aria-labelledby="rm13 attr">
      read more
    </a>
  </p>`
)

function Aria() {
  return (
    <div>
      <h1>What is the button's accessible name?</h1>
      <div className="row aria-container">
        <div className="column aria-btn-ex-1">
          <button aria-label="Blue" aria-labelledby="color">
            Red
          </button>
          <span id="color"> Yellow</span>
          <br></br>
          <CodeBlock
            className="codeBlock"
            theme={nord}
            language={"javascript"}
            text={code1}
          />
        </div>

        <br></br>

        <div className="column aria-btn-ex-2">
          <button>Yellow</button>
          <br></br>
          <CodeBlock
            className="codeBlock"
            theme={nord}
            language={"javascript"}
            text={code2}
          />
          <br></br>
        </div>
        <br></br>

        <div className="column aria-btn-ex-3">
          <button aria-label="Close" onclick="myDialog.close()">
            <svg
              aria-hidden="true"
              focusable="false"
              width="17"
              height="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
                fill="#000"
              />
            </svg>
          </button>
          <br></br>
          <CodeBlock
            className="codeBlock"
            theme={nord}
            language={"javascript"}
            text={code3}
            wrapLongLines={true}
          />
        </div>
      </div>
      <br></br>
      <Divider />
      <div className="row">
        <div className="column">
          <h2 id="attr" class="article-title">
            13 ARIA attributes you need to know
          </h2>
          <p>
            There are over 50 ARIA states and properties, but 13 of them stand
            out.{' '} 
            <a href="13.html" id="rm13" aria-labelledby="rm13 attr">
              Read More
            </a>
          </p>
          <br></br>
          <CodeBlock
            className="codeBlock"
            theme={nord}
            language={"javascript"}
            text={code4}
            wrapLongLines={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Aria;
