import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="text-center floating-container">
        <div className="relative">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="profile-image mx-auto mb-6"
          />
        </div>
        <h1 className="header-name text-gray-800 mb-4">
          Your Name
        </h1>
        <p className="header-subtitle text-xl text-gray-600 mb-8">
          Web Developer | Designer | Creative Thinker
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="header-button primary px-6 py-3 rounded-full"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="header-button outline px-6 py-3 rounded-full"
          >
            Contact Me
          </Link>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I am a passionate web developer, designer, and creative thinker. With years of experience in the industry, I have honed my skills to deliver exceptional digital experiences. My work is focused on creating visually appealing and user-friendly websites and applications that meet the needs of my clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;