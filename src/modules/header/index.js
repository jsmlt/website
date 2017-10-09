// Standard imports
import { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import FaGithub from 'react-icons/lib/fa/github';

// Static assets
import imageLogo from '../../static/images/logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    let activeSubMenu = '';

    if (/^\/demos\/.*$/.test(this.props.history.location.pathname)) {
      activeSubMenu = 'demos';
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
                    onClick={e => this.handleClickExpandableMenuItem('demos', e)}
                    className={this.state.activeSubMenu === 'demos' ? 'expanded' : ''}
                  >Demos</a>
                </li>
                <li><NavLink to="/docs" activeClassName="active">Documentation</NavLink></li>
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
                {this.state.activeSubMenu === 'demos' &&
                  <ul>
                    <li><NavLink to="/demos/svm" activeClassName="active">SVM</NavLink></li>
                    <li><NavLink to="/demos/perceptron" activeClassName="active">Perceptron</NavLink></li>
                    <li><NavLink to="/demos/knn" activeClassName="active">KNN</NavLink></li>
                    <li><NavLink to="/demos/logistic-regression" activeClassName="active">Logistic Regression</NavLink></li>
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
