import logo from './logo.svg';
import './App.css';
import NewComp from './Basic.jsx';//import the component from jsx file
import NewName from './Basic2.jsx';
function App() {
  return (
    <div className="App">
    <NewComp/> {/*Call the component*/}
    <NewName/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
