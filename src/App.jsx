import { useState, useEffect } from 'react';
import './App.css';
import { fetchComments } from './utils/Api';
import CommentList from './components/CommentList/CommentList';
import InputForm from './components/InputForm/InputForm';
import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {
    const [commentList, setCommentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Загрузка комментариев с сервера при первом рендере
    useEffect(() => {
        fetchComments(setCommentList, setIsLoading);
    }, []);

    return (
        <div className="container">
            <ScrollButton />
            {isLoading ? (
                'Loading'
            ) : (
                <CommentList
                    commentList={commentList}
                    setCommentList={setCommentList}
                />
            )}
            <InputForm
                commentList={commentList}
                setCommentList={setCommentList}
            />
        </div>
    );
}

export default App;
