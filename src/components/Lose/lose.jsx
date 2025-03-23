import lose from '../../img/Lose.gif';
import styles from './lose.module.css';

export default function Lose(){
    return(
        <div className={styles.Container}>
            <picture className={styles.containerVideo}>
                <img src={lose} className={styles.video} alt=''/>
            </picture>
        </div>
    )
}