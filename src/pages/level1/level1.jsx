import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import Termometro from '../../img/termometro.png';
import Kitten from '../../components/Kitten/Kitten';
import Words from '../../components/Words/Words';
import Aislar from '../../img/Level1/Aislar-5.png';
import DC from '../../img/Level1/Destruir-3.png';
import Golpear from '../../img/Level1/Golpear-2.png';
import Pellizcar from '../../img/Level1/Pellizcar-4.png'; 
import Morder from '../../img/Level1/Morder-1.png'; 
import styles from './level1.module.css';
import BtnVerificar from '../../components/Verificar/btnVerificar';
import Modal from '../../components/Modales/ModalLose';
import ModalWin from '../../components/Modales/ModalWin';

function Level1(){
    const navigate = useNavigate();

    const numbers = [2, 4, 1, 3, 5];

    const [heartVisibility, setHeartVisibility] = useState([true, true, true]);
    const [open, setOpen] = useState(false);
    const [openWin, setOpenWin] = useState(false);
    const [inputNumbers, setInputNumbers] = useState(Array(numbers.length).fill(''));
    const [correctNumbers, setCorrectNumbers] = useState(Array(numbers.length).fill(false));

    const toggleHeartVisibility = (index) => {
        setHeartVisibility(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleInputChange = (index, event) => {
        const newInputNumbers = [...inputNumbers];
        newInputNumbers[index] = event.target.value;
        setInputNumbers(newInputNumbers);
        
    };

    const checkPiecesPlacement = () => {
        let piecesNotInPlace = 0;
        const newCorrectNumbers = [...correctNumbers];
        const newInputNumbers = [...inputNumbers];

        inputNumbers.forEach((inputNumber, index) => {
            if (parseInt(inputNumber) === numbers[index]) {
                newCorrectNumbers[index] = true;
            } else {
                newInputNumbers[index] = '';
                piecesNotInPlace++;
            }
        });

        setInputNumbers(newInputNumbers);
        setCorrectNumbers(newCorrectNumbers);

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


    return(
        <div className={styles.Container}>
            <div className={styles.AppHeader}>
                {heartVisibility.map((visible, index) => (
                        visible && (
                            <img
                                key={index}
                                src={Heart}
                                className={styles.Heart}
                                style={{width: "15vh", height: "15vh"}}
                                alt=''
                            />
                        )
                ))}
                <img src={Hp} className={styles.Hp} alt=''/>
                <BtnVerificar onClick={checkPiecesPlacement} />
            </div>
            <Modal open={open} onClose={toStart} />
            <ModalWin open={openWin} onClose={toStart} />
            <div className={styles.wordsContainer}>
                <div className={styles.column}>
                    <Words image={Aislar} style={{width: "30vmin", height: "20vmin"}} index={0}/>
                    <Words image={DC} style={{width: "30vmin", height: "20vmin"}} index={1}/>
                </div>
                <div className={styles.column}>
                    <Words image={Morder} style={{width: "30vmin", height: "20vmin"}} index={2}/>
                    <Words image={Pellizcar} style={{width: "30vmin", height: "20vmin"}} index={3}/>
                </div>
                <div className={styles.column}>
                    <Words image={Golpear} style={{width: "30vmin", height: "20vmin"}} index={4}/>
                </div>
            </div>
            <div className={styles.inputsContainer}>
                {numbers.map((word, index) => (
                    <input
                        key={index}
                        type="number"
                        min="1"
                        max="5"
                        value={inputNumbers[index]}
                        onChange={(event) => handleInputChange(index, event)}
                        disabled={correctNumbers[index]}
                    />
                ))}
            </div>
            <div className={styles.columnContainer}>
                <div className={styles.imgContainer}>
                    <img src={Termometro} className={styles.Thermometer} alt=''/>
                </div>
            </div>
            <Kitten/>
        </div>
    )
}

export default Level1;