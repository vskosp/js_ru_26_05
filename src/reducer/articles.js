import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

export default (articles = normalizedArticles, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case DELETE_ARTICLE: return articles.filter((article) => article.id != payload.id)

        case ADD_COMMENT:
            return articles.map(article => {
                if (article.id !== payload.articleId) {
                    return article;
                }

                article = {...article};
                article.comments = (article.comments || []).concat(payload.comment.id);

                return article;
            });
    }

    return articles
}