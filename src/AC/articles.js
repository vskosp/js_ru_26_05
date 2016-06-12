import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE } from '../constants'
import { addComment } from './comments';

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }

    AppDispatcher.dispatch(action)
}

export function addCommentToArticle(text, articleId) {
    const relatedEntity = {
        type: 'article',
        id: articleId
    };
    
    addComment(text, relatedEntity);
}