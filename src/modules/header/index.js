// Standard imports
import { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import { FaGithub } from 'react-icons/fa';

// Static assets
import imageLogo from '../../static/images/logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    let activeSubMenu = '';

    if (/^\/demos\/classification\/.*$/.test(this.props.history.location.pathname)) {
      activeSubMenu = 'demos-classification';
    }

    if (/^\/demos\/clustering\/.*$/.test(this.props.history.location.pathname)) {
      activeSubMenu = 'demos-clustering';
    }

    // Initialize state
    this.state = { activeSubMenu };
  }

  handleClickExpandableMenuItem(subMenu, e) {
    this.setState(prevState => ({
      ...prevState,
      activeSubMenu: (prevState.activeSubMenu === subMenu) ? '' : subMenu,
    }));

    e.preventDefault();
  }

  render() {
    return (
      <header id="header">
        <div className="primary">
          <div className="main-content">
            <NavLink to="/" id="logo" activeClassName="active"><img src={imageLogo} /></NavLink>
            <nav className="navbar left">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li>
                  <a
                    href="#"
                    onClick={e => this.handleClickExpandableMenuItem('demos-classification', e)}
                    className={this.state.activeSubMenu === 'demos-classification' ? 'expanded' : ''}
                  >Classification demos</a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={e => this.handleClickExpandableMenuItem('demos-clustering', e)}
                    className={this.state.activeSubMenu === 'demos-clustering' ? 'expanded' : ''}
                  >Clustering demos</a>
                </li>
                <li>
                  <a href="/jsmlt/docs" target="_blank">Documentation</a>
                </li>
              </ul>
            </nav>
            <div className="navbar social right">
              <ul>
                <li>
                  <a
                    className="iconized"
                    href="https://github.com/jsmlt"
                    target="_blank"
                    title="GitHub repository"
                  ><FaGithub size={24} /> GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <Collapse isOpened={this.state.activeSubMenu.length > 0}>
          <div className="secondary">
            <div className="main-content">
              <nav className="navbar">
                {this.state.activeSubMenu === 'demos-classification' &&
                  <ul>
                    <li><NavLink to="/demos/classification/decision-tree" activeClassName="active">Decision Tree</NavLink></li>
                    <li><NavLink to="/demos/classification/random-forest" activeClassName="active">Random Forest</NavLink></li>
                    <li><NavLink to="/demos/classification/knn" activeClassName="active">KNN</NavLink></li>
                    <li><NavLink to="/demos/classification/logistic-regression" activeClassName="active">Logistic Regression</NavLink></li>
                    <li><NavLink to="/demos/classification/neural-network" activeClassName="active">Neural Network</NavLink></li>
                    <li><NavLink to="/demos/classification/perceptron" activeClassName="active">Perceptron</NavLink></li>
                    <li><NavLink to="/demos/classification/svm" activeClassName="active">SVM</NavLink></li>
                  </ul>
                }
                {this.state.activeSubMenu === 'demos-clustering' &&
                  <ul>
                    <li><NavLink to="/demos/clustering/k-means" activeClassName="active">k-means</NavLink></li>
                  </ul>
                }
              </nav>
            </div>
          </div>
        </Collapse>
      </header>
    );
  }
}

export default withRouter(Header);
