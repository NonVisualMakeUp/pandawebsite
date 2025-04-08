import React from 'react';
import DemoDisplay from './components/DemoDisplay';
import Banner from './components/Banner';
import UploadTool from './components/UploadTool';
import PhotoDisplay from './components/PhotoDisplay';
import VlogDisplay from './components/VlogDisplay';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="main-content">
        {/* 删除DemoDisplay模块 */}
        {/* <DemoDisplay /> */}
        <Banner />
        <UploadTool />
        <PhotoDisplay />
      </div>
      <VlogDisplay />
    </div>
  );
}