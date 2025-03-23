import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import styles from './Level3.module.css';
import Thermometer from '../../img/Thermometer.png';
import Kitten from '../../components/Kitten/Kitten';
import Words from '../../components/Words/Words';
import Insultos from '../../img/Words3/Insultos.png';
import Celar from '../../img/Words3/Celar.png';
import Ignorar from '../../img/Words3/Ignorar.png';
import BH from '../../img/Words2/Bromas hirientes.png';
import Chantajes from '../../img/Words3/Chantajes.png';
import CB from '../../img/Words3/Cyberbullying.png';
import Control from '../../img/Words3/Control.png';
import Acoso from '../../img/Words3/Acoso.png';
import Abuso from '../../img/Words3/Abuso.png';
import BtnVerificar from '../../components/Verificar/btnVerificar';
import Modal from '../../components/Modales/ModalLose';
import ModalWin from '../../components/Modales/ModalWin';

function Level3() {
    const navigate = useNavigate();

    const words = [
        'Abuso', 'Cyberbullying', 'Acoso', 'Control', 'Celar',
        'Chantajes', 'Bromas hirientes', 'Ignorar', 'Insultos'
    ];

    const [heartVisibility, setHeartVisibility] = useState([true, true, true]);
    const [open, setOpen] = useState(false);
    const [openWin, setOpenWin] = useState(false);
    const [inputWords, setInputWords] = useState(Array(words.length).fill(''));
    const [correctWords, setCorrectWords] = useState(Array(words.length).fill(false));

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
                        <img key={index} src={Heart} className={styles.Heart} style={{ width: "15vh", height: "15vh" }}
                            alt=''
                        />
                    )
                ))}
                <img src={Hp} className={styles.Hp} alt='' />
                <BtnVerificar onClick={checkPiecesPlacement} />
            </div>
            <Modal open={open} onClose={toStart} />
            <ModalWin open={openWin} onClose={toStart} />
            <div className={styles.wordsContainer}>
                <div className={styles.column}>
                    <Words image={Celar} id={`word-2`} style={{ width: "14vmin", height: "5vmin" }} index={1} />
                    <Words image={BH} id={`word-3`} style={{ width: "35vmin", height: "5.5vmin" }} index={2} />
                    <Words image={Chantajes} id={`word-5`} style={{ width: "20.8vmin", height: "5.8vmin" }} index={4} />
                    <Words image={Acoso} id={`word-8`} style={{ width: "16vmin", height: "5vmin" }} index={7} />
                    <Words image={Abuso} id={`word-9`} style={{ width: "20.8vmin", height: "5.8vmin" }} index={8} />
                </div>
                <div className={styles.column}>
                    <Words image={Insultos} id={`word-1`} style={{ width: "18vmin", height: "4.5vmin" }} index={0} />
                    <Words image={Ignorar} id={`word-4`} style={{ width: "23vmin", height: "6.2vmin" }} index={3} />
                    <Words image={CB} id={`word-6`} style={{ width: "30.5vmin", height: "6vmin" }} index={5} />
                    <Words image={Control} id={`word-7`} style={{ width: "23.6vmin", height: "4.5vmin" }} index={6} />
                </div>
            </div>
            <div className={styles.inputsContainer}>
                {words.map((word, index) => (
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

export default Level3;