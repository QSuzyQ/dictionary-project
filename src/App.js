import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="App-background-overlay">
        <div className="container">
          <header className="App-header">
            <section className="intro d-flex">
              <span className="App-header-text">
                “My brain is only a receiver, in the Universe there is a core
                from which we obtain knowledge, strength and inspiration. I have
                not penetrated into the secrets of this core, but I know that it
                exists.”
                <br />
                <strong>Nikola Tesla</strong>
              </span>
              <img
                src={logo}
                alt="Nikola Tesla"
                className="logo justify-content-end"
              />
            </section>
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
