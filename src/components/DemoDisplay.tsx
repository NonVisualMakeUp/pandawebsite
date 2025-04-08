import React, { useState, useEffect } from 'react';
import './DemoDisplay.css';

const DemoDisplay: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    `${process.env.PUBLIC_URL}/demo/demo1.jpg`,
    `${process.env.PUBLIC_URL}/demo/demo2.jpg`
  ];

  // 图片轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3秒切换一次
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="demo-display">
      <div className="image-carousel">
        {/* 删除标题 */}
        {/* <h1 className="demo-title">惊鸿婚纱摄影</h1> */}
        <img 
          src={images[currentImageIndex]} 
          alt={`Demo ${currentImageIndex + 1}`} 
          className="carousel-image"
        />
      </div>
    </div>
  );
};

export default DemoDisplay;