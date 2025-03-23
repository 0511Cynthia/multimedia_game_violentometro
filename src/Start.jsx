import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import Tittle from './img/Tittle.png';
import Edad from './img/Edad.png';
import btn3 from './img/btn3.png';
import btn2 from './img/btn2.png';
import btn1 from './img/btn1.png';
import Teen from './img/Teen.gif';
import Baby from './img/baby.gif';
import Kid from './img/kid.gif';
import lOGO_fiscalía from './img/lOGO_fiscalía.png';
import logoUp from './img/LogoUp.png'
import Btn from './components/Btns/Btn';
import Contactos from '../src/multimedios/Contactos.mp3';
import Niveles from '../src/multimedios/Niveles.mp3';
import Music from '../src/multimedios/Music.mp3';
import './Start.css';

function Start() {
  const audioRef = useRef();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);

  const audioList = [Contactos, Niveles, Music];

  const toLevel3 = () => {
    navigate("/level3");
  }

  const toLevel2 = () => {
    navigate("/level2");
  }

  const toLevel1 = () => {
    navigate("/level1");
  }

  const playAudio = (index) => {
    audioRef.current.src = audioList[index];
    audioRef.current.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      playAudio(audioIndex);
    }
    setIsPlaying(!isPlaying);
  }

  const nextAudio = () => {
    setAudioIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % audioList.length;
      playAudio(newIndex);
      return newIndex;
    });
  }

  return (
    <main className="main">
      <audio ref={audioRef} onEnded={nextAudio}>
      </audio>
      <header className="App-header">
        <img src ={logoUp} className='logoUp' alt=''/>
        <img src={lOGO_fiscalía} className='lOGO_fiscalía' alt=''/>
        <button onClick={toggleAudio} className="audio-button">
          {isPlaying ? 'Detener' : 'Información'}
        </button>
        <img src={Tittle} className='Tittle' alt=''/>
        <img src={Edad} className='Edad' alt=''/>
      </header>

      <div className='Container'>
        <div className='container-btn3'>
          <Btn image={Baby} button={btn1} onClick={toLevel1} />
        </div>
        <div className='container-btn2'>
          <Btn image={Kid} button={btn2} onClick={toLevel2} />
        </div>
        <div className='container-btn1'>
          <Btn image={Teen} button={btn3} onClick={toLevel3} />          
        </div>
      </div>
    </main>
  );
}

export default Start;