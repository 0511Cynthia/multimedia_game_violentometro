import styles from './Words.module.css';

export default function Word({image, id, style}){
    return(
        <div  id={id} className={styles.Container}>
            
            <picture className={styles.containerWord}>
                <img src={image} className={styles.Word} style={style} alt=''/>
            </picture>   
            
        </div>
    )
}