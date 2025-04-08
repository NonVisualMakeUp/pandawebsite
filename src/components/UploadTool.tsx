import React, { useState } from 'react';
import axios from 'axios';

const UploadTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      setMessage('请先选择一个文件。');
      return;
    }
    setMessage('文件上传中...');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', 'exampleUserId'); // 示例用户ID
    formData.append('sessionId', 'exampleSessionId'); // 示例会话ID

    try {
      const response = await axios.post('https://your-backend-url.com/api/weddingcore', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('上传成功！请稍后查看生成的婚纱照。');
    } catch (error) {
      setMessage('上传失败，请重试。');
    }
  };

  const toggleEnlarge = (event: React.MouseEvent<HTMLImageElement>) => {
    event.currentTarget.classList.toggle('enlarged');
  };

  return (
    <div className="upload-tool">
      <h2>下载熊猫美妆APP</h2>
      <p className="upload-description">扫描二维码或点击链接下载安装包</p>
      <a href="https://example.com/download" className="download-link">下载链接</a>
      <img 
        src={`${process.env.PUBLIC_URL}/qr-code.png`} 
        alt="QR Code" 
        className="qr-code" 
        onClick={toggleEnlarge} 
      />
    </div>
  );
};

export default UploadTool; 