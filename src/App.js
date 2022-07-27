
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function Sextant_() {
  return <h2>Sextant</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sextant_ />);


function App() {
  return (
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

  );
}

export default App;
