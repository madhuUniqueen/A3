'use client'
import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import Annotations from './components/Annotations';
import AnnotationForm from './components/AnnotationForm';

const App = () => {
  const [annotations, setAnnotations] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoUrl, setVideoUrl] = useState("https://youtu.be/ah-1WRBLF6o");

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter YouTube video URL"
          style={{ width: '300px', marginRight: '10px' }}
        />
        <button onClick={() => setVideoUrl(videoUrl)}>Load Video</button>
      </div>
      <VideoPlayer videoUrl={videoUrl} onTimeUpdate={setCurrentTime} />
      <Annotations annotations={annotations.filter(a => a.time === currentTime)} />
      <AnnotationForm onAddAnnotation={(annotation) => setAnnotations([...annotations, { ...annotation, time: currentTime }])} />
    </div>
  );
};

export default App;
