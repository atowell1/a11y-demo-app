
import "./App.scss"
import StartLink from "./StartLink";
import backtothefuture from './assets/backtothefuture.png'
import Chart from "./Chart";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'My chart'
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">A11y React Demo App</header>
      <body>
        <h1>Back to the Future: Accessibility fundamentals to drive your web apps into the future</h1>
        <img src={backtothefuture} alt=""></img>
          <button class="mdc-button mdc-button--outline">My Accessible Button
          </button>

        <div type="button" tabindex="0" alt-text="Div Button">Div Button </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <StartLink />
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
