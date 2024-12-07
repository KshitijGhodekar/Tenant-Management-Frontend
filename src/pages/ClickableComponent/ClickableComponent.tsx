import React from 'react';
import './Gallery.css';

const GalleryComponent = () => {
  // const images = [
  //   { id: 1, src: '/assets/property1.jpg', alt: 'Modern Apartment', name: 'Modern Apartment', link: '/property1' },
  //   { id: 2, src: '/assets/property2.jpg', alt: 'Cozy House', name: 'Cozy House', link: '/property2' },
  //   { id: 3, src: '/assets/property3.jpg', alt: 'Luxury Villa', name: 'Luxury Villa', link: '/property3' },
  // ];

  // const handleImageClick = (link:any) => {
  //   window.location.href = link; 
  // };

  return (
    <div className="gallery">
      {/* {images.map((image) => (
        <div
          key={image.id}
          className="gallery-item"
          onClick={() => handleImageClick(image.link)}
        >
          <img src={image.src} alt={image.alt} className="gallery-image" />
          <div className="gallery-name">{image.name}</div>
        </div>
      ))} */}
    </div>
  );
};

export default GalleryComponent;
