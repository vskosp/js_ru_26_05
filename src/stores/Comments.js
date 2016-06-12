import BasicStore from './BasicStore';
import { ADD_COMMENT } from '../constants';

export class Comments extends BasicStore {
  static createComment(text) {
    text = text && text.trim && text.trim();

    if (typeof text !== 'string' || !text.length) {
      return null;
    }

    return {
      id: Date.now(),
      name: 'guest',
      text: text.trim()
    }
  }

  constructor(...args) {
    super(...args);
    
    this._subscribe(action => {
      const {type, payload} = action;
      
      switch(type) {
        case ADD_COMMENT:
          this._add(payload.comment);
          break;
        default: 
          return
      }
      
      this._emitChange();
    });
  }
}