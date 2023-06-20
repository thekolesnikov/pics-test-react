import styles from './InputForm.module.css';

function InputForm() {
    return (
        <div className={styles.form__block}>
            <form className={styles.form}>
                <textarea
                    className={styles.form__textarea}
                    placeholder="Enter your comment"
                    cols="10"
                    rows="10"
                ></textarea>
                <button className={styles.form__button}>Send</button>
            </form>
        </div>
    );
}

export default InputForm;
