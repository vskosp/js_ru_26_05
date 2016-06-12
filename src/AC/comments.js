import AppDispatcher from '../dispatcher';
import { ADD_COMMENT } from '../constants'

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