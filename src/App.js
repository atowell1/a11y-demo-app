import './App.css';
import  Button  from '@mui/material/Button';
import StartLink from './StartLink';
import BasicTooltip from './BasicTooltip';
import BasicTable from './BasicTable';
import ImageChangeOnMouseOver from './ImageChangeOnMouseOver';
import BasicForm from './BasicForm';
import InputElement from './TestForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageChangeOnMouseOver />
        <p>
          Aurelia's React Sample App
        </p>

        <Button color="secondary" 
        outline="">Button</Button>
        <StartLink />
        <BasicTable />
        <BasicTooltip />
        <BasicForm />
        <InputElement />
      </header>
    </div>
  );
}

export default App;
