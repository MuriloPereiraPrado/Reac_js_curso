import styles from '../botao/botao.module.css';

export default function Botao({event,name}) { 

    function teste(){
        alert('base');
    }
    return(
        <div>
            <div onClick={() => event()} className={styles.styleButton}>
                <p>{name}</p>
            </div>
        </div>
    );
}

