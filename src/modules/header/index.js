// Standard imports
import { Link } from 'react-router-dom';
import FaGithub from 'react-icons/lib/fa/github';

export default () => (
  <header>
    <div className="main">
      <nav className="left">
        <ul className="horizontal">
          <li><Link to="/">Home</Link></li>
          <li><a href="/app/" target="_blank">VisualML Demo</a></li>
        </ul>
      </nav>
      <ul className="social horizontal right">
        <li className="iconized">
          <a
            href="https://github.com/jsmlt"
            target="_blank"
            title="GitHub repository"
          ><FaGithub size={24} /> GitHub</a>
        </li>
      </ul>
    </div>
  </header>
);
