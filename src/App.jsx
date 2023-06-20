import './App.css';
import CommentList from './components/CommentList/CommentList';
import InputForm from './components/InputForm/InputForm';

function App() {
    return (
        <div className="container">
            <CommentList />
            <InputForm />
        </div>
    );
}

export default App;
