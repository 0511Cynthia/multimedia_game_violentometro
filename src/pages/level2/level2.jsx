import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import Thermometer from '../../img/Thermometer.png';
import Kitten from '../../components/Kitten/Kitten';
import Words from '../../components/Words/Words';
import Ignorar from '../../img/Words2/Ignorar.png';
import Apodos from '../../img/Words2/Apodos.png';
import Señalamientos from '../../img/Words2/Señalamientos.png';
import Abandono from '../../img/Words2/Abandono.png';
import BH from '../../img/Words2/Bromas hirientes.png';
import Amenazas from '../../img/Words2/Amenazas.png';
import Acoso from '../../img/Words2/Acoso.png';
import Abuso from '../../img/Words2/Abuso.png';
import VF from '../../img/Words2/Violencia fisica.png';
import BtnVerificar from '../../components/Verificar/btnVerificar';
import Modal from '../../components/Modales/ModalLose';
import ModalWin from '../../components/Modales/ModalWin';
import styles from './level2.module.css';

const wordsData = [
    { word: 'Ignorar', image: Ignorar, style: { width: "20vmin", height: "5.8vmin" } },
    { word: 'Apodos', image: Apodos, style: { width: "20vmin", height: "5.8vmin" } },
    { word: 'Señalamientos', image: Señalamientos, style: { width: "30vmin", height: "5.2vmin" } },
    { word: 'Abandono', image: Abandono, style: { width: "20vmin", height: "5vmin" } },
    { word: 'Bromas hirientes', image: BH, style: { width: "35vmin", height: "5vmin" } },
    { word: 'Amenazas', image: Amenazas, style: { width: "23.6vmin", height: "4.5vmin" } },
    { word: 'Acoso', image: Acoso, style: { width: "16vmin", height: "4.5vmin" } },
    { word: 'Abuso', image: Abuso, style: { width: "15vmin", height: "5vmin" } },
    { word: 'Violencia Física', image: VF, style: { width: "30.5vmin", height: "4.5vmin" } }
];

function Level2() {
    const navigate = useNavigate();

    const words = [
        'Abuso', 'Violencia fisica', 'Amenazas', 'Acoso', 'Abandono',
        'Bromas hirientes', 'Señalamientos', 'Apodos', 'Ignorar'
    ];

    const [heartVisibility, setHeartVisibility] = useState([true, true, true]);
    const [open, setOpen] = useState(false);
    const [openWin, setOpenWin] = useState(false);
    const [inputWords, setInputWords] = useState(Array(wordsData.length).fill(''));
    const [correctWords, setCorrectWords] = useState(Array(wordsData.length).fill(false));

    const toggleHeartVisibility = (index) => {
        setHeartVisibility(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleInputChange = (index, event) => {
        const newInputWords = [...inputWords];
        newInputWords[index] = event.target.value;
        setInputWords(newInputWords);
    };

    const checkPiecesPlacement = () => {
        let piecesNotInPlace = 0;
        const newCorrectWords = [...correctWords];
        const newInputWords = [...inputWords];

        inputWords.forEach((inputWord, index) => {
            if (inputWord.trim().toLowerCase() === words[index].toLowerCase()) {
                newCorrectWords[index] = true;
            } else {
                newInputWords[index] = '';
                piecesNotInPlace++;
            }
        });

        setInputWords(newInputWords);
        setCorrectWords(newCorrectWords);

        if (piecesNotInPlace === 0) {
            setOpenWin(true);
        } else {
            lostALife();
        }
    };

    const lostALife = () => {
        const firstVisibleHeartIndex = heartVisibility.indexOf(true);
        if (firstVisibleHeartIndex !== -1) {
            toggleHeartVisibility(firstVisibleHeartIndex);
        }
        if (heartVisibility.filter(visible => visible).length === 1) {
            setOpen(true);
        }
    };

    const toStart = () => {
        navigate("/")
    }

    return (
        <div className={styles.Container}>
            <div className={styles.AppHeader}>
                {heartVisibility.map((visible, index) => (
                    visible && (
                        <img key={index} src={Heart} className={styles.Heart} style={{ width: "15vh", height: "15vh" }} alt='' />
                    )
                ))}
                <img src={Hp} className={styles.Hp} alt='' />
                <BtnVerificar onClick={checkPiecesPlacement} />
            </div>
            <Modal open={open} onClose={toStart} />
            <ModalWin open={openWin} onClose={toStart} />
            <div className={styles.wordsContainer}>
                <div className={styles.column}>
                    {wordsData.slice(0, 5).map((item, index) => (
                        <Words key={index} image={item.image} style={item.style} index={index} />
                    ))}
                </div>
                <div className={styles.column}>
                    {wordsData.slice(5).map((item, index) => (
                        <Words key={index} image={item.image} style={item.style} index={index + 5} />
                    ))}
                </div>
            </div>
            <div className={styles.inputsContainer}>
                {wordsData.map((item, index) => (
                    <input
                        key={index}
                        type="text"
                        value={inputWords[index]}
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder='Escribe aquí'
                        disabled={correctWords[index]}
                    />
                ))}
            </div>
            <div className={styles.columnContainer}>
                <div className={styles.imgContainer}>
                    <img src={Thermometer} className={styles.Thermometer} alt='' />
                </div>
            </div>
            <Kitten />
        </div>
    );
}
export default Level2;