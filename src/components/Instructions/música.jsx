import React, { useRef, useEffect, useState } from 'react';
import styles from './música.module.css';

const Instructions = ({ audioSrc, label, setPlayingAudio, playingAudio }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (playingAudio !== audioRef) {
      setIsPlaying(false);
    }
  }, [playingAudio]);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setPlayingAudio(null);
    } else {
      if (playingAudio && playingAudio !== audioRef) {
        playingAudio.current.pause();
        playingAudio.current.currentTime = 0;
      }
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
      setPlayingAudio(audioRef);
      setIsPlaying(true);
    }
  };

  return (
    <div className={styles.container}>
      <audio ref={audioRef}>
        <source src={audioSrc} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <button onClick={toggleAudio} className={styles.btn}>
        {isPlaying ? 'Detener' : label}
      </button>
    </div>
  );
};

export default Instructions;