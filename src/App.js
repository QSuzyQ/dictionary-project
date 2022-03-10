import Dictionary from "./Dictionary";
import logo from "./book.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="App-background-overlay">
        <div className="container">
          <header className="App-header">
            <img src={logo} alt="Logo" className="logo" />
          </header>
          <main>
            <Dictionary defaultKeyword="knowledge" />
          </main>
          <footer className="App-footer">
            <small>Coded by Suzana</small>
          </footer>
        </div>
      </div>
    </div>
  );
}
