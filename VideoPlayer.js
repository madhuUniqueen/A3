import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoUrl, onTimeUpdate }) => {
  const playerRef = useRef(null);

  const getVideoId = (url) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|watch\?v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

  const handleReady = (event) => {
    playerRef.current = event.target;
  };

  const handleStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      const interval = setInterval(() => {
        if (playerRef.current) {
          const currentTime = playerRef.current.getCurrentTime();
          onTimeUpdate(currentTime);
        }
      }, 1000);

      playerRef.current.addEventListener('onStateChange', (e) => {
        if (e.data !== YouTube.PlayerState.PLAYING) {
          clearInterval(interval);
        }
      });
    }
  };

  return (
    videoId ? (
      <YouTube
        videoId={videoId}
        onReady={handleReady}
        onStateChange={handleStateChange}
        opts={{ width: '100%', height: 'auto' }}
      />
    ) : (
      <div>No valid video URL provided</div>
    )
  );
};

export default VideoPlayer;
