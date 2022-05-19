import * as React from "react";
const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('js', require('highlight.js/lib/languages/xml'));

const highlightedCode = hljs.highlight('<span>Hello World!</span>', {language: 'js'}).value


const Snippet = () => {
  return (
    <pre>
      <code>
        
        {highlightedCode}
      </code>
    </pre>
  );
};

function Aria() {
  return (
    <div>
      <h1>What is the button's accessible name?</h1>
      <div className="aria-btn-ex-1">
        <button aria-label="Blue" aria-labelledby="color">
            Red
          </button>
        <span id="color">Yellow</span>
      </div>
      <div className="aria-btn-ex-2">
        <button>Yellow</button>
      </div>
      <div className="aria-btn-ex-3">
        <button aria-label="Close" onclick="myDialog.close()">
        <svg aria-hidden="true" focusable="false" width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z" fill="#000"/></svg>
        </button>
      </div>
    </div>
  );
}

export default Aria;
