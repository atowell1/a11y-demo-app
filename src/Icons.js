import * as React from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function Icons() {
  return (
    <div class=" row header">
      <div class=" column">
        <StarOutlineIcon fontSize="large"/> Bad
      </div>
      <div class=" column">
        <StarOutlineIcon fontSize="large" /> Better
      </div>
      <div class=" column">
        <StarOutlineIcon fontSize="large" /> Best
      </div>
    </div>
  );
}
