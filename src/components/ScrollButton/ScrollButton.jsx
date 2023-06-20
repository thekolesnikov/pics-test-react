import styles from './ScrollButton.module.css';

function ScrollButton() {
    function scrollToBottom() {
        window.scrollTo({
            left: 0,
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }
    return (
        <button className={styles.button} onClick={scrollToBottom}>
            Scroll to bottom
        </button>
    );
}

export default ScrollButton;
