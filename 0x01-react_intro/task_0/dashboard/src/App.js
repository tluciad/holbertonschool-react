import holberton from './holberton.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="header" className="App-header">
        <img src={ holberton } className="App-logo" alt="logo" />
        <h1>School dashboard</h1>     
      </div>     
        <div id="body" className ="App-body">
          <p>Login to access the full dashboard</p>        
      </div>
      <div id="footer" className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>   
  );
}

export default App;
