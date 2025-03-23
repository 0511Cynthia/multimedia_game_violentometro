import Intructions from '../../img/Instructions.png';
import styles from './Signs.module.css';

export default function Sign(){
    return(
        <div className={styles.Container}>
            <picture className={styles.containerVideo}>
                <img src={Intructions} className={styles.video} alt=''/>
            </picture>   
            
        </div>
    )
}