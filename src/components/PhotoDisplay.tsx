import React, { useState } from 'react';
import './PhotoDisplay.css';

const PhotoDisplay: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const images = [
    `${process.env.PUBLIC_URL}/images/face_recognition.jpg`,
    `${process.env.PUBLIC_URL}/images/makeup_detection.jpg`,
    `${process.env.PUBLIC_URL}/images/feedback_detection.jpg`,
    `${process.env.PUBLIC_URL}/images/voice_qa.jpg`
  ];

  const descriptions = [
    '面部识别',
    '妆容检测',
    '检测反馈',
    '语音问答'
  ];

  const imagesPerPage = 4;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="photo-display">
      <h2>美妆功能展示</h2>
      <div className="photo-container">
        <button className="nav-button prev" onClick={prevPage}>
          {'<'}
        </button>
        <div className="photo-content">
          {currentImages.map((img, index) => (
            <div key={index} className="photo-item">
              <p className="photo-description">
                {descriptions[currentPage * imagesPerPage + index]}
              </p>
              <img 
                src={img} 
                alt={descriptions[currentPage * imagesPerPage + index]} 
                className="photo-image"
              />
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={nextPage}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default PhotoDisplay;