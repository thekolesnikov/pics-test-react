const API_URL = 'https://dummyjson.com/comments';

export async function fetchComments(setCommentList) {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCommentList(data.comments);
    } catch (error) {
        throw new Error('Oops :( Something goes wrong!');
    }
}
