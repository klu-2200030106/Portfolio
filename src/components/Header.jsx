import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1 className="name">Kandula Rohith Kumar</h1>
        <p className="title">
        Full Stack Developer | DSA Expert | Innovative Thinker
          <span className="title-underline"></span>
        </p>
        <div className="action-buttons">
          <Link to="/projects" className="primary-button">
            View Projects
          </Link>
          <Link to="/contact" className="secondary-button">
            Contact Me
          </Link>
          <a href="https://drive.google.com/file/d/13MenlOXjFr0Tq4_nF5eaedU01LQt9Yv7/view?usp=sharing" download className="download-button">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;