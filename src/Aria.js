import * as React from 'react';


function Aria() {
  return(
     <div>
    <button aria-label="Blue" aria-labelledby="color">Red</button>
  <span id="color">Yellow</span>

  </div>
  )
 
}

export default Aria