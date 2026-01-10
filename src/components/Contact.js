import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace 'your-formspree-id' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mnngjdbk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="tm-section-pad-top tm-parallax-2">
      <div className="container tm-container-contact">
        <div className="row">
          <div className="text-center col-12">
            <h2 className="tm-section-title mb-4">Contact Us</h2>
            <p className="mb-5">
              We are available 24/7 to reply for your requests and to provide you with all details you need
            </p><br />
          </div>
          
          <div className="col-sm-12 col-md-6">
            <form onSubmit={handleSubmit}>
              <input 
                name="name" 
                type="text" 
                placeholder="Your Name" 
                className="tm-input" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                name="email" 
                type="email" 
                placeholder="Your Email" 
                className="tm-input" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <textarea 
                name="message" 
                rows="8" 
                placeholder="Message" 
                className="tm-input" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button 
                type="submit" 
                className="btn tm-btn-submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
          
          <div className="col-sm-12 col-md-6">
            <div className="contact-item">
              <a rel="nofollow" href="#chat" className="item-link">
                <i className="far fa-2x fa-comment mr-4"></i>
                <span className="mb-0">Chat Online</span>
              </a>              
            </div>
            
            <div className="contact-item">
              <a rel="nofollow" href="mailto:mostafawaheed60115@gmail.com" className="item-link">
                <i className="far fa-2x fa-envelope mr-4"></i>
                <span className="mb-0">mostafawaheed60115@gmail.com</span>
              </a>              
            </div>
            
            <div className="contact-item">
              <a rel="nofollow" href="#location" className="item-link">
                <i className="fas fa-2x fa-map-marker-alt mr-4"></i>
                <span className="mb-0">Our Location</span>
              </a>              
            </div>
            
            <div className="contact-item">
              <a rel="nofollow" href="tel:+201062270083" className="item-link">
                <i className="fas fa-2x fa-phone-square mr-4"></i>
                <span className="mb-0">+201062270083</span>
              </a>              
            </div>
            
            <div className="contact-item">&nbsp;</div>
          </div>
        </div>
      </div>

      <footer className="text-center small tm-footer">
        <p className="mb-0">
          Copyright &copy; 2025 <a href="#nova">Nova Solutions</a> 
          . <a rel="nofollow" href="#design" title="HTML templates">Designed by Nova Solutions Web developers</a>
        </p>
      </footer>
    </section>
  );
};

export default Contact; 