import React, { useState, useRef, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      img: "/static/img/mostafa1.jpg",
      name: "Mostafa Waheed",
      role: "CO Founder",
      quote: "Ex Egyptian Air Forces AI Engineer. Great Experience in Software development and AI solutions"
    },
    {
      id: 2,
      img: "/static/img/H1.jpg",
      name: "Mohamed Hesham",
      role: "Partner & Full Stack",
      quote: "Great experience in Web Development using React and Java Spring"
    },
    {
      id: 3,
      img: "/static/img/3bdo1.jpg",
      name: "Abdelrahman Samir",
      role: "Full Stack",
      quote: "Great experience in Web Development using .Net"
    },
    {
      id: 4,
      img: "/static/img/DA.jpg",
      name: "Abdel Aziz Anan",
      role: "Data Scientist",
      quote: "Great experience in Data Analysis and Machine Learning"
    },
    {
      id: 5,
      img: "/static/img/Abdelrahman.jpeg",
      name: "Abdelrahman Osama",
      role: "Frontend",
      quote: "Great experience in Web Development using React"
    },
    {
      id: 6,
      img: "/static/img/ziad.jpg",
      name: "Zeyad Ahmed",
      role: "Full Stack",
      quote: "Great experience in Web Development using Angular and Java Spring"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.children[0].offsetWidth * currentIndex;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section id="testimonials" className="tm-section-pad-top tm-parallax-2">      
      <div className="container tm-testimonials-content">
        <div className="row">
          <div className="col-lg-12 tm-content-box">
            <h2 className="text-white text-center mb-4 tm-section-title">Who we are</h2>
            <p className="mx-auto tm-section-desc text-center">
              "We are a group of experts in AI, software, and education who look forward to building new minds and technologies."
            </p>
            <div className="mx-auto tm-gallery-container tm-gallery-container-2">
              <div className="tm-testimonials-carousel-wrapper">
                {/* Navigation buttons */}
                <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                
                <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
                  <i className="fas fa-chevron-right"></i>
                </button>

                {/* Carousel container */}
                <div className="tm-testimonials-carousel" ref={carouselRef}>
                  {teamMembers.map(member => (
                    <figure key={member.id} className="tm-testimonial-item">
                      <img src={member.img} alt={member.name} className="img-fluid mx-auto" />
                      <figcaption className="text-center">{member.name} ({member.role})</figcaption>
                      <blockquote>{member.quote}</blockquote>
                    </figure>
                  ))}
                </div>

                {/* Dots indicator */}
                <div className="carousel-dots">
                  {teamMembers.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tm-bg-overlay"></div>
    </section>
  );
};

export default Testimonials;
