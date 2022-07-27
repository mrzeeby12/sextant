
import './App.css';


function App() {
  return (
    
      <header className="App-header">
        
        <a
          className = "App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Sextant Services
        </a>
        <WelcomeDialog></WelcomeDialog>
          
      </header>

  );
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="Red">
      <h1 className="Dialog-title">
        Welcome to Sextant (created by Cisco)
      </h1>
      <p className="Dialog-message">
        Further information will be showcased here.
      </p>
    </FancyBorder>
  );
}


export default App;