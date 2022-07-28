import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hola WM desde Vercel!!!!</p>
        <a
          className='App-link'
          href='https://wholemeaning.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Wholemeaning.com
        </a>
      </header>
    </div>
  );
}

export default App;
