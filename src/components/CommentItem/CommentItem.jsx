import styles from './CommentItem.module.css';
import deleteButton from './img/deleteButton.svg';

function CommentItem({ id, text, user, commentList, setCommentList }) {
    //Функция для удаления коментария
    function deleteComment(id) {
        setCommentList(commentList.filter((comment) => comment.id !== id));
    }
    return (
        <div className={styles.comment}>
            <div className={styles.comment__info}>
                <div className={styles.comment__user}>User - {user}</div>
                <button
                    className={styles.comment__button}
                    onClick={() => deleteComment(id)}
                >
                    <img src={deleteButton} alt="delete" />
                </button>
            </div>
            <div className={styles.comment__text}>{text}</div>
        </div>
    );
}

export default CommentItem;
