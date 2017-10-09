// Standard imports
import { Component } from 'react';

// Local imports
import Header from '../../modules/header';

class Home extends Component {
  render() {
    return (
      <div id="page">
        <Header />
        <div id="main" className="main">
          <div className="sidebar">
            <aside className="flat">
              <a className="github-button" href="https://github.com/jsmlt/jsmlt" data-icon="octicon-star" data-show-count="true" aria-label="Star jsmlt/jsmlt on GitHub">Star</a>
            </aside>
            <aside>
              <nav>
                <ul>
                  <li><a href="#Introduction">Introduction</a></li>
                  <li>
                    <a href="#VisualML">VisualML</a>
                    <ul>
                      <li><a href="#VisualML_Installation">Installation</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#JSMLT">JSMLT</a>
                    <ul>
                      <li><a href="#JSMLT_Installation">Installation</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
          <div className="content">
            <section className="section" id="Introduction">
              <p className="banner">
                Get started right away by running VisualML straight from your browser!
                <a href="/app/" className="button" target="_blank">Run VisualML!</a>
              </p>

              <p>JSMLT is a machine learning library for JavaScript, which includes an interactive
              visualization toolkit called VisualML. It is primarily intended for use in educational
              settings, where it can be used as an interactive tool for understanding machine
              learning algorithms. The entire project is entirely open-source and available through <a href="https://github.com/jsmlt" target="_blank">
              GitHub</a> and <a href="https://www.npmjs.com/org/jsmlt" target="_blank">NPM</a>.</p>

              <div className="image">
                <img src="assets/images/screenshot.png" alt="VisualML screenshot" />
                <span className="caption">VisualML is a visualization toolkit that
                runs <a href="/app/" target="_blank">right in your browser</a>.</span>
              </div>
            </section>
            <section className="section" id="VisualML">
              <h2>VisualML</h2>
              <p>VisualML is a web-based application that visualizes machine learning algorithms
              implemented in JSMLT. It was built on <a href="https://facebook.github.io/react/" target="_blank">React</a>.
              It features a simple, two-dimensional grid, where you can add data points and run different
              machine learning algorithms on the input data. The tool exposes the algorithms'
              hyperparameters, and dynamically updates the resulting classification on the grid.</p>

              <h3 id="VisualML_Installation">Installation</h3>
              <p>VisualML can be installed on your local machine by following the <a href="https://github.com/jsmlt/visualml#installation" target="_blank">
              installation instructions on GitHub.</a></p>
            </section>
            <section className="section" id="JSMLT">
              <h2>JSMLT</h2>
              <p>JSMLT is the underlying machine learning toolkit used for VisualML, built in plain
              JavaScript. The entire library is extensively documented, as such allowing your
              students (or yourself) to get a grasp of the inner workings of the implemented
              algorithms.</p>

              <h3 id="JSMLT_Installation">Installation</h3>
              <p>JSMLT can be installed on your local machine by following the <a href="https://github.com/jsmlt/jsmlt#installation" target="_blank">
              installation instructions on GitHub.</a></p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
