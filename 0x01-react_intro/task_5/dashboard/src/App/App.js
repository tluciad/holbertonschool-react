import holberton from './holberton.jpg'
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <div id="header" className="App-header">
        <img src={ holberton } className="App-logo" alt="logo" />
        <h1>School dashboard</h1>     
      </div>     
        <div id="body" className ="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email:  
            <input id="email" name="email" type="email" required/>
          </label> 
          <label htmlFor="password">Password: 
            <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required/>
          </label> 
          <button type="button"> OK </button>
      </div>
      <div id="footer" className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>   
  );
}

export default App;
