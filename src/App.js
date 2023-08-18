import logo from './logo.svg';
import './App.css';
import Employee from './Components/Employee';

function App() {
  // console.log('we are about to list the employees');
  // const showEmployees=true;
  return (
    <div className="App">
      {showEmployees ? 
        <>
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        </>
        :
        <p>you cannot see the employees</p>
      }
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>hello</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
    </div>
  );
}

export default App;
