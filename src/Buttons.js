import * as React from "react";
import Button from '@mui/material/Button';


export default function Buttons() {
  return (
    <div class="buttonGroup row">
      <p class="column">Div Button</p>
        <div class="divButton" type="button" tabindex="0" alt-text="Div Button">
          Submit
        </div>
        <p></p>
      <button class="mdc-button mdc-button--outline column">
        Submit
      </button>
      <Button class="column" variant="outlined">Submit</Button>
    </div>
  );
}
