import { useState } from 'react';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaLinkedin, 
  FaTelegramPlane, 
  FaUser, 
  FaEnvelope, 
  FaComment, 
  FaPaperPlane 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState({
    isFocused: {},
    isValid: {},
    isSubmitting: false,
  });

  const styles = {
    container: {
      background: 'linear-gradient(135deg, #f5f7fa 0%, #f5f7fa 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '4rem 0',
      fontFamily: '"Poppins", sans-serif',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(50, 50, 93, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
      position: 'relative',
      marginBottom: '1.5rem',
    },
    input: {
      borderRadius: '12px',
      padding: '0.75rem 1rem 0.75rem 3rem',
      border: '2px solid #e6e6e6',
      transition: 'all 0.3s ease',
      backgroundColor: '#f9f9f9',
    },
    inputFocus: {
      borderColor: '#6a11cb',
      boxShadow: '0 0 0 3px rgba(106, 17, 203, 0.2)',
    },
    inputIcon: {
      position: 'absolute',
      left: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#6a11cb',
      opacity: 0.7,
    },
    submitButton: {
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      color: 'white',
      borderRadius: '12px',
      padding: '0.75rem 1.5rem',
      border: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    socialIcon: {
      color: '#6a11cb',
      transition: 'transform 0.3s ease, color 0.3s ease',
    },
    socialIconHover: {
      transform: 'scale(1.2)',
      color: '#2575fc',
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormState(prev => ({
      ...prev,
      isValid: { ...prev.isValid, [name]: value.trim().length > 0 }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true }));

    const isFormValid = Object.values(formData).every(field => field.trim().length > 0);

    if (isFormValid) {
      // Simulate form submission
      setTimeout(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setFormState({ isFocused: {}, isValid: {}, isSubmitting: false });
      }, 1500);
    } else {
      alert('Please fill out all fields');
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/+123456789', 
      icon: FaWhatsapp 
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/your_username', 
      icon: FaInstagram 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/your_username', 
      icon: FaLinkedin 
    },
    { 
      name: 'Telegram', 
      href: 'https://t.me/your_username', 
      icon: FaTelegramPlane 
    }
  ];

  return (
    <div className="container" style={styles.container}>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div 
            className="card" 
            style={styles.card}
            onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
          >
            <div className="card-body p-5">
              <h2 className="text-center mb-4" style={{ 
                background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent' 
              }}>
                Contact Me
              </h2>
              <p className="text-center text-muted mb-5">
                Got a project? Lets talk! Im just a message away.
              </p>
              <form onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                  <FaUser style={styles.inputIcon} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    style={{
                      ...styles.input,
                      ...(formState.isFocused.name ? styles.inputFocus : {})
                    }}
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFormState(prev => ({ 
                      ...prev, 
                      isFocused: { ...prev.isFocused, name: true } 
                    }))}
                    onBlur={() => setFormState(prev => ({ 
                      ...prev, 
                      isFocused: { ...prev.isFocused, name: false } 
                    }))}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <FaEnvelope style={styles.inputIcon} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                    style={{
                      ...styles.input,
                      ...(formState.isFocused.email ? styles.inputFocus : {})
                    }}
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFormState(prev => ({ 
                      ...prev, 
                      isFocused: { ...prev.isFocused, email: true } 
                    }))}
                    onBlur={() => setFormState(prev => ({ 
                      ...prev, 
                      isFocused: { ...prev.isFocused, email: false } 
                    }))}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <FaComment style={styles.inputIcon} />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-control"
                    rows="4"
                    style={{
                      ...styles.input,
                      ...(formState.isFocused.message ? styles.inputFocus : {})
                    }}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFormState(prev => ({ 
                      ...prev, 
                      isFocused: { ...prev.isFocused, message: true } 
                    }))}
                    onBlur={() => setFormState(prev => ({ 
                      ...prev, 
                      isFocused: { ...prev.isFocused, message: false } 
                    }))}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn w-100"
                  style={styles.submitButton}
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  <FaPaperPlane className="ms-2" />
                </button>
              </form>

              <div style={styles.socialLinks}>
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialIcon}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = styles.socialIconHover.transform;
                      e.currentTarget.style.color = styles.socialIconHover.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.color = styles.socialIcon.color;
                    }}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;