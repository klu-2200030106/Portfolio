
export const SocialLinkIcon = ({ 
  name, 
  size = 24, 
  color = 'currentColor', 
  className = '',
  strokeWidth = 2,
  variant = 'default'
}) => {
  // Advanced icon configuration with multiple variants
  const iconStyles = {
    default: {
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    },
    filled: {
      fill: color,
      stroke: 'none'
    },
    outlined: {
      fill: 'none',
      stroke: color,
      strokeWidth: strokeWidth * 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }
  };

  const icons = {
    WhatsApp: (props) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        {...props}
        className={`social-icon whatsapp-icon ${className}`}
      >
        <path d="M17.6 17.6a8.8 8.8 0 0 1 0-12.4 8.8 8.8 0 1 1 0 12.4z" />
        <path d="M12 12v5.3l2.7-1.4" />
      </svg>
    ),
    Instagram: (props) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        {...props}
        className={`social-icon instagram-icon ${className}`}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    LinkedIn: (props) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        {...props}
        className={`social-icon linkedin-icon ${className}`}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    Telegram: (props) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        {...props}
        className={`social-icon telegram-icon ${className}`}
      >
        <path d="M15.59 14.51a1.92 1.92 0 0 1-1.18.68 2 2 0 0 1-1.54-.44l-3.26-2.72L8 11.55l-3.25-1.48a1 1 0 0 1 .2-1.84l14.43-4.14a1 1 0 0 1 1.2 1.32l-3.09 12.52z" />
      </svg>
    )
  };

  // Get the icon component
  const IconComponent = icons[name];

  // If no icon found, return null
  if (!IconComponent) return null;

  // Apply the selected variant's styles
  const variantStyles = iconStyles[variant] || iconStyles.default;

  // Render the icon with dynamic styles
  return <IconComponent {...variantStyles} />;
};

// Example usage:
// <SocialLinkIcon name="WhatsApp" size={32} color="#25D366" variant="filled" />
// <SocialLinkIcon name="LinkedIn" strokeWidth={1.5} variant="outlined" />