import BasicStore from './BasicStore'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export default class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    break
                
                case ADD_COMMENT:
                    const {relatedEntity: {id, type}, comment} = payload;
                    if (type === 'article') {
                        this._addReferenceToItem(id, 'comments', comment.id);
                    }
                    break;

                default:
                    return
            }

            this._emitChange()
        })
    }
}