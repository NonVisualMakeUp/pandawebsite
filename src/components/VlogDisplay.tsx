import React from 'react';

const VlogDisplay: React.FC = () => {
  return (
    <section className="vlog-display">
      <h2>美妆视频教程</h2>
      <div className="vlog-content">
        <video controls loop autoPlay muted className="vlog-video">
          <source 
            src={`${process.env.PUBLIC_URL}/videos/vlog.mp4`} 
            type="video/mp4" 
          />
          您的浏览器不支持视频标签。
        </video>
      </div>
    </section>
  );
};

export default VlogDisplay;