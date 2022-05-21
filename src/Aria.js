import * as React from "react";
import { CodeBlock, nord } from "react-code-blocks"
import "./Aria.scss"

const code1 =(
  'text',
  `<button aria-label="Blue" aria-labelledby="color">
      Red
    </button>
  <span id="color">Yellow</span>
`
);

const code2 = (
  'text',
  `<button>Yellow</button>`
);

const code3 = (
  'text',
  `<button aria-label="Close" onclick="myDialog.close()">
  <svg aria-hidden="true" focusable="false" width="17"
  height="17" xmlns="http://www.w3.org/2000/svg">
  <path d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783
  5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092
  2.162-5.818-5.924-5.818 5.924-2.092-2.162Z" fill="#000"/></svg>
  </button>`
);


function Aria() {
  return (
    <div >
      <h1>What is the button's accessible name?</h1>
      <div className="aria-container">
        <div className="aria-div aria-btn-ex-1">
          <button aria-label="Blue" aria-labelledby="color">
              Red
            </button>
          <span id="color"> Yellow</span>
        </div>
        <br></br>
        <CodeBlock className="codeBlock" theme={nord} language={'javascript'} text={(code1)} />
        <br></br>
        <div className="aria-div aria-btn-ex-2">
          <button>Yellow</button>
          <br></br>
          <CodeBlock className="codeBlock" theme={nord} language={'javascript'} text={(code2)} />
          <br></br>
        </div>
        <br></br>
        <div className="aria-btn-ex-3">
          <button aria-label="Close" onclick="myDialog.close()">
          <svg aria-hidden="true" focusable="false" width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z" fill="#000"/></svg>
          </button>
          <br></br>
          <CodeBlock className="codeBlock" theme={nord} language={'javascript'} text={(code3)} wrapLongLines={true}/>
        </div>
      </div>
    </div>
  );
}

export default Aria;
