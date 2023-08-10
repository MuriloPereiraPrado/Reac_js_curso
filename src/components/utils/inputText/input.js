import styles from '../inputText/inoputText.module.css';

export default function Inserir (props) {

    return(
        <div>
            <input className={styles.styleInput} 
                   type="text" 
                   name={props.name}
                   placeholder={props.place}/>
        </div>
    );
}
