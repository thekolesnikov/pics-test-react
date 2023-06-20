import styles from './CommentItem.module.css';

function CommentItem({ text, user }) {
    return (
        <div className={styles.comment}>
            <div className={styles.comment__user}>{user}</div>
            <div className={styles.comment__text}>{text}</div>
        </div>
    );
}

export default CommentItem;
