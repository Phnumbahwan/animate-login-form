import logo from "../logo.svg";
import '../App.css';
const ReactDefault = ({setStart}) => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div style={{ display: 'flex', justifyContent: 'center' }} onClick={() => setStart(true)}>
                <div className={'start-login-button'}>LOGIN NOW!</div>
            </div>
        </div>
    )
}

export default ReactDefault;