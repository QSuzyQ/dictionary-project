import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="App-background-overlay">
        <div className="container">
          <header className="App-header">Hello</header>
          <main>
            <Dictionary />
          </main>
          <footer className="App-footer">
            <small>Coded by Suzana</small>
          </footer>
        </div>
      </div>
    </div>
  );
}
