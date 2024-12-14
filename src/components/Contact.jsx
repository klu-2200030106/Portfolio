import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formState, setFormState] = useState({
    isFocused: {},
    isValid: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Basic validation
    setFormState(prev => ({
      ...prev,
      isValid: {
        ...prev.isValid,
        [name]: value.trim().length > 0
      }
    }));
  };

  const handleFocus = (name) => {
    setFormState(prev => ({
      ...prev,
      isFocused: {
        ...prev.isFocused,
        [name]: true
      }
    }));
  };

  const handleBlur = (name) => {
    setFormState(prev => ({
      ...prev,
      isFocused: {
        ...prev.isFocused,
        [name]: false
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    const isFormValid = Object.values(formData).every(field => field.trim().length > 0);
    
    if (isFormValid) {
      alert('Message sent!');
      
      // Clear form data
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset form state validation
      setFormState({
        isFocused: {},
        isValid: {}
      });
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div style={styles.contactContainer}>
      <div style={styles.formWrapper}>
        <h2 style={styles.formTitle}>Contact Me</h2>
        <form onSubmit={handleSubmit} style={styles.contactForm}>
          <div style={styles.formGroup}>
            <label 
              style={{
                ...styles.formLabel,
                ...(formState.isFocused.name ? styles.labelFocused : {})
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              style={{
                ...styles.formInput,
                ...(formState.isFocused.name ? styles.inputFocused : {}),
                ...(formState.isValid.name === false ? styles.inputInvalid : {})
              }}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label 
              style={{
                ...styles.formLabel,
                ...(formState.isFocused.email ? styles.labelFocused : {})
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              style={{
                ...styles.formInput,
                ...(formState.isFocused.email ? styles.inputFocused : {}),
                ...(formState.isValid.email === false ? styles.inputInvalid : {})
              }}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label 
              style={{
                ...styles.formLabel,
                ...(formState.isFocused.message ? styles.labelFocused : {})
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              style={{
                ...styles.formInput,
                ...styles.formTextarea,
                ...(formState.isFocused.message ? styles.inputFocused : {}),
                ...(formState.isValid.message === false ? styles.inputInvalid : {})
              }}
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" style={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

// Updated styles with background image
const styles = {
  contactContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("cc.avif")', // Placeholder background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    padding: '4rem'
  },
  formWrapper: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    padding: '2.5rem',
    transition: 'all 0.3s ease'
  },
  formTitle: {
    textAlign: 'center',
    color: '#2563eb',
    marginBottom: '2rem',
    fontSize: '2.25rem',
    position: 'relative'
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formGroup: {
    position: 'relative'
  },
  formLabel: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#4b5563',
    transition: 'color 0.3s ease'
  },
  labelFocused: {
    color: '#3b82f6'
  },
  formInput: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.9)' // Slightly transparent input backgrounds
  },
  inputFocused: {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)'
  },
  inputInvalid: {
    borderColor: '#ef4444',
    boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.2)'
  },
  formTextarea: {
    resize: 'vertical',
    minHeight: '120px'
  },
  submitButton: {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(to right, #3b82f6, #6366f1)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  }
};

export default Contact;