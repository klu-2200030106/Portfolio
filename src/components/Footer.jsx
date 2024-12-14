import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com', 
      icon: '🔗',
      color: '#0077B5'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com', 
      icon: '💻',
      color: '#333'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com', 
      icon: '🐦',
      color: '#1DA1F2'
    }
  ];

  return (
    <footer className={`advanced-footer ${isHovered ? 'footer-hover' : ''}`}>
      <div className="footer-container">
        <div 
          className="footer-social-links"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {socialLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              style={{
                '--footer-link-color': link.color,
                '--footer-delay': `${index * 0.1}s`
              }}
            >
              <span className="footer-social-icon">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
        <div className="footer-copyright-section">
          <p>
            © {new Date().getFullYear()} Your Name. 
            <span className="footer-trademark">™</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;