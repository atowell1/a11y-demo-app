import * as React from "react";
const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('js', require('highlight.js/lib/languages/xml'));

const highlightedCode = hljs.highlight('<span>Hello World!</span>', {language: 'js'}).value


const Snippet = () => {
  return (
    <pre>
      <code>
        <button aria-label="Blue" aria-labelledby="color">
          Red
        </button>
        <span id="color">Yellow</span>
        {highlightedCode}
      </code>
    </pre>
  );
};

function Aria() {
  return (
    <div>
      <h1>What will the accessible name be?</h1>
      {Snippet}
    </div>
  );
}

export default Aria;
