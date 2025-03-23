import React, { useState } from 'react';
import Cat from '../../img/cat.gif';
import Sign from '../Signs/Sign';
import styles from './Kitten.module.css';
import Reglas from '../../multimedios/Reglas del juego.mp3';
import Advertencias from '../../multimedios/Advertencias.mp3';
import Instructions from '../../components/Instructions/música';

export default function Kitten({ onClick }) {
  const [playingAudio, setPlayingAudio] = useState(null);

  const handleSetPlayingAudio = (audioRef) => {
    if (playingAudio && playingAudio !== audioRef) {
      playingAudio.current.pause();
      playingAudio.current.currentTime = 0;
    }
    setPlayingAudio(audioRef);
  };

  return (
    <div className={styles.Container}>
      <picture className={styles.containerVideo}>
        <img src={Cat} className={styles.video} alt=''/>
      </picture>
      <Sign />
      <Instructions
        label="Instrucciones"
        audioSrc={Reglas}
        setPlayingAudio={handleSetPlayingAudio}
        playingAudio={playingAudio}
      />
      <Instructions
        label="Advertencias"
        audioSrc={Advertencias}
        setPlayingAudio={handleSetPlayingAudio}
        playingAudio={playingAudio}
      />
    </div>
  );
}