const API_URL = 'https://dummyjson.com/comments';

export async function fetchComments(setCommentList, setIsLoading) {
    setIsLoading(true);
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCommentList(data.comments);
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        throw new Error('Oops :( Something goes wrong!');
    }
}
