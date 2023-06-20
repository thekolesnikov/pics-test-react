import { useState } from 'react';
import styles from './InputForm.module.css';

function InputForm({ commentList, setCommentList }) {
    const [textareaValue, setTextareaValue] = useState('');

    // Функция для добавления комментария
    function addComment(text) {
        setCommentList([
            ...commentList,
            {
                id: Date.now(),
                body: text,
                user: {
                    username: 'New user',
                },
            },
        ]);
        setTextareaValue('');
        clearLS();
    }

    // Функция для сохранения введеных данных в LS
    function saveToLS(text) {
        localStorage.setItem('textareaValue', text);
    }

    // Функция для удаления данных из LS при сабмите формы
    function clearLS() {
        localStorage.setItem('textareaValue', '');
    }

    return (
        <div className={styles.form__block}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addComment(localStorage.getItem('textareaValue'));
                }}
                className={styles.form}
            >
                <textarea
                    className={styles.form__textarea}
                    placeholder="Enter your comment"
                    value={localStorage.getItem('textareaValue')}
                    onChange={(e) => {
                        setTextareaValue(e.target.value);
                        saveToLS(e.target.value);
                    }}
                    cols="10"
                    rows="10"
                ></textarea>
                <button className={styles.form__button}>Send</button>
            </form>
        </div>
    );
}

export default InputForm;
