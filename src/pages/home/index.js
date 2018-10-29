// Standard imports
import { Component } from 'react';
import { Link } from 'react-router-dom';

// Local imports
import Header from '../../modules/header';
import SyntaxHighlighter from '../../components/syntax-highlighter';
import imageScreenshot from '../../static/images/screenshot.png';

class Home extends Component {
  render() {
    const codeStrings = {
      install: 'npm install @jsmlt/jsmlt',
      basicExample: `// Import JSMLT library
var jsmlt = require('@jsmlt/jsmlt');

// Training data
train_X = [[-1,-1], [-1,1], [1,1], [1,-1]];
train_y = [0, 0, 1, 1];

// Testing data
test_X = [[1,2], [1,-2], [-1,-2], [-1,2]];

// Create and train classifier
var clf = new jsmlt.Supervised.SVM.SVM({
  kernel: new jsmlt.Kernel.Linear(),
});
clf.train(train_X, train_y);

// Make predictions on test data
console.log(clf.predict(test_X));`,
    };

    return (
      <div id="page">
        <Header />
        <div id="main">
          <section className="section">
            <div className="main-content grid grid-2">
              <div>
                <h1>The Machine Learning Toolkit for JavaScript</h1>
                <p>
                  JSMLT. An open-source easy-to-use machine learning library. Programmed entirely
                  in JavaScript. We've got supervised learning, right inside your browser! And
                  what's even better: we've got interactive, 2-dimensional visualizations of all
                  classical machine learning algorithms, ready for use — why not take it for a spin
                  straight away?
                </p>
                <div>
                  <Link
                    className="button big button-cta"
                    to="/demos/classification/svm"
                  >
                    Try the JSMLT interactive demo
                  </Link>
                </div>
              </div>
              <div>
                <div className="window">
                  <img src={imageScreenshot} alt="VisualML screenshot" />
                </div>
              </div>
            </div>
          </section>
          <section className="section section-alt">
            <div className="main-content">
              <h1>Getting started</h1>
              <p>
                Installing JSMLT is really, really easy! It's available on <a href="https://npmjs.com/package/@jsmlt/jsmlt" title="JSMLT on npm">npm</a>, so to use it in your project you only have to run:
              </p>
              <SyntaxHighlighter language='bash'>{codeStrings.install}</SyntaxHighlighter>
              <h2>A simple classifier</h2>
              <p>
                Now that JSMLT is installed, you're ready to run your first machine learning
                scenario! In this example, we'll train a linear SVM on some dummy data, and make
                some predictions! All in all, we just need a few lines of code for this:
              </p>
              <SyntaxHighlighter language='javascript'>{codeStrings.basicExample}</SyntaxHighlighter>
              Running this code will output the predictions for our 4 test data points:
              <SyntaxHighlighter language='bash'>[ 1, 1, 0, 0 ]</SyntaxHighlighter>
              <p>
                The entire npm package for running this code is available in the <a href="https://github.com/jsmlt/examples/tree/master/01-getting-started" title="JSMLT Example 1: Getting Started">JSMLT examples repository</a>. Clone it & run it!
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
