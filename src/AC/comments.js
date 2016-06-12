import AppDispatcher from '../dispatcher';
import { ADD_COMMENT } from '../constants'
//это плохая практика, луше держать AC независимыми от сторов
import { Comments } from '../stores/Comments';

export function addComment(text, relatedEntity = {}) {
  const comment = Comments.createComment(text);

  if (!comment) {
    return;
  }

  const action = {
    type: ADD_COMMENT,
    payload: { comment, relatedEntity }
  };

  AppDispatcher.dispatch(action);
}
