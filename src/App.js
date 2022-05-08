import "./App.scss";
import StartLink from "./StartLink";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import backtothefuture from "./assets/backtothefuture.png";
import Button from "@mui/material/Button";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <AppBar position="fixed">
        <Typography>Menu</Typography>
      </AppBar>
      <br></br>
      <br></br>
      <header className="App-header">
        Back to the Future: Accessibility fundamentals to drive your web apps
        into the future
      </header>
      <body class="row">
        <div class="column bad ">
          <StarOutlineIcon fontSize="large" /> Bad
          <img
            src={backtothefuture}
            alt="Back to the Future Movie Poster"
          ></img>
          <br></br>
          <div class="divButton" type="button" tabindex="0" alt-text="submit">
            Submit
          </div>
        </div>
        <div class="column better ">
          <StarOutlineIcon fontSize="large" /> Better
          <img
            src={backtothefuture}
            alt="Image of the Back to the Future Movie Poster"
          ></img>
          <button class="mdc-button mdc-button--outline">Submit</button>
        </div>

        <div class="column best">
          <StarOutlineIcon fontSize="large" /> Best
          <img src={backtothefuture} alt=""></img>
          <Button variant="outlined">
            Submit
          </Button>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </body>
      <footer>Created by Aurelia Towell</footer>
    </div>
  );
}

export default App;
