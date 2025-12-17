import { useEffect, useRef, useState } from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handlePress = () => {
    setIsMuted(!isMuted);
    if (videoRef.current.paused) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.7 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-card">
      <video
        ref={videoRef}
        src={video.src}
        className="video-player"
        loop
        muted={isMuted}
        playsInline
        onClick={handlePress}
      />
      <div className="mute-icon" onClick={handlePress}>
        {isMuted ? '🔇' : '🔊'}
      </div>
      <div className="side-bar">
        <div className="icon">❤️</div>
        <div className="icon">💬</div>
        <div className="icon">🔗</div>
      </div>
      <div className="video-info">
        <h3>@{video.author}</h3>
        <p>{video.title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
