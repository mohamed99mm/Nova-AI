import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleItems, setVisibleItems] = useState(6); // Start with 6 items
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      img: "/static/img/gallery/1.jpg",
      title: "Smart Solutions",
      category: "solutions"
    },
    {
      id: 2,
      img: "/static/img/gallery/2.png",
      title: "All in One",
      category: "solutions"
    },
    {
      id: 3,
      img: "/static/img/gallery/3.png",
      title: "Hospitals and clinics",
      category: "healthcare"
    },
    {
      id: 4,
      img: "/static/img/gallery/4.png",
      title: "Schools",
      category: "education"
    },
    {
      id: 5,
      img: "/static/img/gallery/5.png",
      title: "AI Designs",
      category: "technology"
    },
    {
      id: 6,
      img: "/static/img/gallery/6.png",
      title: "AI Designs",
      category: "technology"
    },
    {
      id: 7,
      img: "/static/img/gallery/7.png",
      title: "Dental Clinics and Labs",
      category: "healthcare"
    },
    {
      id: 8,
      img: "/static/img/gallery/8.jpg",
      title: "Advanced Technology",
      category: "technology"
    }
  ];

  // Filter items based on category
  const filteredItems = galleryItems.filter(item => 
    filter === 'all' || item.category === filter
  );

  // Items to display (for load more functionality)
  const itemsToShow = filteredItems.slice(0, visibleItems);

  const openImage = (item) => {
    setSelectedImage(item);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const loadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'solutions', label: 'Solutions' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'education', label: 'Education' },
    { key: 'technology', label: 'Technology' }
  ];

  // Reset visible items when filter changes
  useEffect(() => {
    setVisibleItems(6);
  }, [filter]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage && e.key === 'Escape') {
        closeImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="section-container">
          <div className="row">
            <div className="text-center col-12">
              <h2 className="section-title">Our Gallery</h2>
              <p className="mx-auto tm-section-desc">
                Explore our innovative solutions and successful projects
              </p>
            </div>            
          </div>
          
          {/* Filter Buttons */}
          <div className="gallery-filter">
            {categories.map(category => (
              <button
                key={category.key}
                className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-container">
            <div className="gallery-grid">
              {itemsToShow.map(item => (
                <div 
                  key={item.id} 
                  className="gallery-item"
                  onClick={() => openImage(item)}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="gallery-image"
                  />
                  <div className="gallery-caption">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleItems < filteredItems.length && (
              <div className="load-more-container">
                <button className="load-more-btn" onClick={loadMore}>
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={closeImage}
              aria-label="Close image"
            >
              ×
            </button>
            <img 
              src={selectedImage.img} 
              alt={selectedImage.title} 
              className="modal-image" 
            />
            <div className="modal-caption">
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;