import styles from './Btn.module.css';

export default function Btn({ onClick, image, button }){
    return(
        <main className={styles.main}>
          
            <picture className={styles.containerVideo}>
                <img src={image} className={styles.video} alt=''/>
            </picture>   

            <div className={styles.btnContainer}>
                <button type="submit" className={styles} onClick={onClick}>                
                    <img src={button} className={styles.btn3} alt=''/>
                </button>
            </div>

        </main>
    )
}