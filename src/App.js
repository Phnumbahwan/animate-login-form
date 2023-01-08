import './App.css';
import LoginForm from "./component/LoginForm";
import {useState} from "react";
import ReactDefault from "./component/ReactDefault";

function App() {
    const [start, setStart] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
          {
              start ? <LoginForm/> : <ReactDefault setStart={setStart}/>
          }
      </header>
    </div>
  );
}

export default App;
