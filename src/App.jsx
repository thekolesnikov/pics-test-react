import { useState, useEffect } from 'react';
import './App.css';
import { fetchComments } from './utils/Api';
import CommentList from './components/CommentList/CommentList';
import InputForm from './components/InputForm/InputForm';
import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {
    const [commentList, setCommentList] = useState([]);

    // Загрузка комментариев с сервера при первом рендере
    useEffect(() => {
        fetchComments(setCommentList);
    }, []);

    return (
        <div className="container">
            <ScrollButton />
            <CommentList
                commentList={commentList}
                setCommentList={setCommentList}
            />
            <InputForm
                commentList={commentList}
                setCommentList={setCommentList}
            />
        </div>
    );
}

export default App;
