import VideoCard from './VideoCard';
import './VideoFeed.css';

const videos = [
  { id: 1, src: '/videos1.mp4', author: 'arnur_dev', title: 'Мое видео #1 🔥' },
  { id: 2, src: '/videos2.mp4', author: 'arnur_dev', title: 'Второй шортс 🚀' },
  { id: 3, src: '/videos3.mp4', author: 'arnur_dev', title: 'Третий ролик 🎬' },
  { id: 4, src: '/videos4.mp4', author: 'arnur_dev', title: 'Четвертый контент ✨' },
  { id: 5, src: '/videos5.mp4', author: 'arnur_dev', title: 'Пятое видео ✌️' },
  { id: 6, src: '/videos6.mp4', author: 'arnur_dev', title: 'Финал шестое ✅' },
];

const VideoFeed = () => {
  return (
    <div className="shorts-feed">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoFeed;
