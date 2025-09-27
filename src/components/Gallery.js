import React, { useState, useRef, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const galleryItems = [
    {
      id: 1,
      img: "/static/img/gallery/1.jpg",
      title: "Smart Solutions"
    },
    {
      id: 2,
      img: "/static/img/gallery/2.png",
      title: "All in One"
    },
    {
      id: 3,
      img: "/static/img/gallery/3.png",
      title: "Hospitals and clinics"
    },
    {
      id: 4,
      img: "/static/img/gallery/4.png",
      title: "Schools"
    },
    {
      id: 5,
      img: "/static/img/gallery/5.png",
      title: "AI Designs"
    },
    {
      id: 6,
      img: "/static/img/gallery/6.png",
      title: "AI Designs"
    },
    {
      id: 7,
      img: "/static/img/gallery/7.png",
      title: "Dental Clinics and Labs"
    },
    {
      id: 8,
      img: "/static/img/gallery/8.jpg",
      title: ""
    }
  ];

  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev >= galleryItems.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev === 0 ? galleryItems.length - itemsPerView : prev - 1
    );
  };

  const openImage = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <>
      <section id="gallery" className="tm-section-pad-top">
        <div className="container tm-container-gallery">
          <div className="row">
            <div className="text-center col-12">
              <h2 className="tm-text-primary tm-section-title mb-4">Gallery</h2>
              <p className="mx-auto tm-section-desc"></p>
            </div>            
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mx-auto tm-gallery-container">
                <div className="gallery-carousel-wrapper">
                  <button className="gallery-nav-btn gallery-nav-prev" onClick={prevSlide}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <div className="gallery-carousel">
                    <div 
                      className="gallery-carousel-track"
                      style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                    >
                      {galleryItems.map(item => (
                        <div key={item.id} className="gallery-carousel-item">
                          <div className="gallery-item" onClick={() => openImage(item.img)}>
                            <figure className="effect-honey tm-gallery-item">
                              <img src={item.img} alt={`Image ${item.id}`} className="img-fluid" />
                              <figcaption>
                                <h2><i>{item.title} <span></span></i></h2>
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="gallery-nav-btn gallery-nav-next" onClick={nextSlide}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>                
            </div>        
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeImage}>×</button>
            <img src={selectedImage} alt="Enlarged view" className="enlarged-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;