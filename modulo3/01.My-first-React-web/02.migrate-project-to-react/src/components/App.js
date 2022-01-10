import "../styles/App.scss";
import arrow from "../images/ico-arrow.svg";
import scrollDown from "../images/ico-scroll-down.svg";
import menu from "../images/ico-menu.svg";

function App() {
  return (
    <div>
      <header id="header" className="header">
        <nav>
          <a href="https://adalab.es" className="burger">
            <img src={menu} alt="menu buttom" />
          </a>
        </nav>
        <h1 className="headertitle">Anonymous proxy</h1>
        <p className="headertext">In hac habitasse platea dictumst.</p>
        <div className="circle">
          <div className="scroll">
            <a href="./index.html#reasons">
              <img
                src={scrollDown}
                className="scrollarrow"
                alt="scroll down arrow"
              />
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="looking">
          <h2 className="insomnia">Insomnia tips</h2>
          <h3 className="titlelooking">Looking through a window</h3>
          <p className="textlooking">
            Donec accumsan, nulla ut volutpat porttitor, quam odio tempus felis,
            at luctus ex diam nec lectus. Vivamus semper sodales rutrum.
          </p>
          <div className="boxgo">
            <a href="#home" className="gobuttom">
              Go
            </a>
          </div>
        </section>
        <section id="reasons" className="reasons">
          <h2 className="titlereasons">3 reasons to purchase</h2>
          <div className="row2">
            <h3 className="titlereason">Ut sed metus</h3>{" "}
            <p className="textreason">
              Lorem ipsum dolor sit amet, consecteur.
            </p>
          </div>
          <div className="row3">
            <h3 className="titlereason">Curabitur ac erat</h3>{" "}
            <p className="textreason">
              Mauris mattis urna quis lorem molestie.
            </p>
          </div>
          <div className="row4">
            <h3 className="titlereason">Morbi dictum</h3>{" "}
            <p className="textreason">Aliquam in dolor et dolor tincidunt.</p>
          </div>
          <div className="row5">
            <a href="#home" className="morebuttom">
              More reasons
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <section className="circle2">
          <div className="arrow">
            <a href="./index.html#header">
              <img src={arrow} className="footerarrow" alt="scroll up arrow" />
            </a>
          </div>
        </section>
        <section className="textfooter">
          <nav className="navfooter">
            <ul className="menuarticles">
              <li>
                <a className="articles" href="https://adalab.es">
                  Articles
                </a>
              </li>
              <li>
                <a className="articles" href="https://adalab.es">
                  Books
                </a>
              </li>
              <li>
                <a className="articles" href="https://adalab.es">
                  Events
                </a>
              </li>
              <li>
                <a className="articles" href="https://adalab.es">
                  Reasons
                </a>
              </li>
              <li>
                <a className="articles" href="https://adalab.es">
                  Tips
                </a>
              </li>
            </ul>
            <ul className="menusmm">
              <li>
                <a className="smm" href="https://adalab.es">
                  Twitter
                </a>
              </li>
              <li>
                <a className="smm" href="https://adalab.es">
                  Instagram
                </a>
              </li>
              <li>
                <a className="smm" href="https://adalab.es">
                  Mastodon.social
                </a>
              </li>
            </ul>
          </nav>
          <section className="welove">
            <div className="copy">&copy; 2021</div>
            <small className="small">
              We <span className="heart">❤</span> components
            </small>
          </section>
        </section>
      </footer>
    </div>
  );
}

export default App;
