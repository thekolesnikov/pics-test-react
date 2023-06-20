import CommentItem from '../CommentItem/CommentItem';
import styles from './CommentList.module.css';

function CommentList({ commentList, setCommentList }) {
    return (
        <div className={styles.list}>
            {commentList.length &&
                commentList.map((comment) => {
                    return (
                        <CommentItem
                            key={comment.id}
                            id={comment.id}
                            text={comment.body}
                            user={comment.user.username}
                            commentList={commentList}
                            setCommentList={setCommentList}
                        />
                    );
                })}
        </div>
    );
}

export default CommentList;
