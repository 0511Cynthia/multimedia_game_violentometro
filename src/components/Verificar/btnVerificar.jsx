import styles from './Verificar.module.css';
import Verificar from '../../img/Verificar.png';


export default function btnVerificar({onClick, style}){

    return(
        <div className={styles.btnContainer}>
            <button style={style} className={styles.img} onClick={onClick}>
                <img src={Verificar} className={styles.verificar} alt=''/>
            </button>
        </div>
    )
}