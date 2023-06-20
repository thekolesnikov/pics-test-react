import { useState, useEffect } from 'react';
import CommentItem from '../CommentItem/CommentItem';
import { fetchComments } from '../../utils/Api';
import styles from './CommentList.module.css';

function CommentList() {
    const [commentList, setCommentList] = useState([]);
    useEffect(() => {
        fetchComments(setCommentList);
    }, []);
    return (
        <div className={styles.list}>
            {commentList.map((comment) => {
                return (
                    <CommentItem
                        key={comment.id}
                        text={comment.body}
                        user={comment.user.username}
                    />
                );
            })}
        </div>
    );
}

export default CommentList;
