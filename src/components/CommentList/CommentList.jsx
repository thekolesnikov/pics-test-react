import { useState, useEffect } from 'react';
import CommentItem from '../CommentItem/CommentItem';
import { fetchComments } from '../../utils/Api';
import styles from './CommentList.module.css';

function CommentList() {
    const [commentList, setCommentList] = useState([]);

    // Загрузка комментариев с сервера при первом рендере
    useEffect(() => {
        fetchComments(setCommentList);
    }, []);

    //Функция для удаления коментария
    function deleteComment(id) {
        setCommentList(commentList.filter((comment) => comment.id !== id));
    }
    return (
        <div className={styles.list}>
            {commentList.map((comment) => {
                return (
                    <CommentItem
                        key={comment.id}
                        id={comment.id}
                        text={comment.body}
                        user={comment.user.username}
                        deleteComment={deleteComment}
                    />
                );
            })}
        </div>
    );
}

export default CommentList;
