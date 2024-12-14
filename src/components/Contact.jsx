import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState({
    isFocused: {},
    isValid: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Basic validation
    setFormState((prev) => ({
      ...prev,
      isValid: {
        ...prev.isValid,
        [name]: value.trim().length > 0,
      },
    }));
  };

  const handleFocus = (name) => {
    setFormState((prev) => ({
      ...prev,
      isFocused: {
        ...prev.isFocused,
        [name]: true,
      },
    }));
  };

  const handleBlur = (name) => {
    setFormState((prev) => ({
      ...prev,
      isFocused: {
        ...prev.isFocused,
        [name]: false,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    const isFormValid = Object.values(formData).every(
      (field) => field.trim().length > 0
    );

    if (isFormValid) {
      alert('Message sent!');

      // Clear form data
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Reset form state validation
      setFormState({
        isFocused: {},
        isValid: {},
      });
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="container">
      <div className="contact-form">
        <h1>Contact me</h1>
        <p>
          Want to connect? My inbox is always open! You can also reach me on
          social media.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label
              className={`form-label ${
                formState.isFocused.name ? 'label-focused' : ''
              }`}
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
              className={`form-input ${
                formState.isFocused.name
                  ? 'input-focused'
                  : formState.isValid.name === false
                  ? 'input-invalid'
                  : ''
              }`}
              required
            />
          </div>

          <div className="form-group">
            <label
              className={`form-label ${
                formState.isFocused.email ? 'label-focused' : ''
              }`}
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
              className={`form-input ${
                formState.isFocused.email
                  ? 'input-focused'
                  : formState.isValid.email === false
                  ? 'input-invalid'
                  : ''
              }`}
              required
            />
          </div>

          <div className="form-group">
            <label
              className={`form-label ${
                formState.isFocused.message ? 'label-focused' : ''
              }`}
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              className={`form-input form-textarea ${
                formState.isFocused.message
                  ? 'input-focused'
                  : formState.isValid.message === false
                  ? 'input-invalid'
                  : ''
              }`}
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        <div className="social-links">
          <a href="https://wa.me/+123456789" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15274.362455431207!2d79.56935457499999!3d14.153722550000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb63e9eb9d5ffe5%3A0x16a01c3d5e9e2cf8!2sAravind%2C%20Tenali%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1684177546907!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;