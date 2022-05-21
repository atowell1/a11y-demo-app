import * as React from "react";
import Button from "@mui/material/Button";
import { CodeBlock, nord } from "react-code-blocks"

const code1 = (
  'text',
  `<div 
    class="divButton"
    type="button" 
    tabindex="0"
    aria-label="submit">
      Submit
</div>`
);

const code2 = (
  'text',
  `<button 
    aria-label="submit button">
      Submit
  </button>`
)

const code3 = (
  'text',
  `<Button variant="outlined">
      Submit
  </Button>`
)

export default function Semantics() {
  return (
    <body class="row">
        <div class="column bad ">
          <h2>Bad</h2>

          <div class="divButton" type="button" tabindex="0" aria-label="submit">
            Submit
          </div>
          <br></br>
        <CodeBlock className="codeBlock" theme={nord} language={'javascript'} text={(code1)} />
        </div>
        
        <div class="column better ">
          <h2>Better</h2>
          
          <button aria-label="submit" >Submit</button>
          <br></br>
        <CodeBlock className="codeBlock" theme={nord} language={'javascript'} text={(code2)} />
        </div>

        <div class="column best">
          <h2>Best</h2>

          <Button className="realButton" variant="outlined">
            Submit
          </Button>

          <br></br>
        <CodeBlock className="codeBlock" theme={nord} language={'javascript'} text={(code3)} />
        </div>
      </body>
  );
}
