import React, { PropTypes, Component } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion';

class ArticleList extends Component {
    render() {
        const { articles, openedItem, toggleOpen } = this.props

        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === openedItem}
                openArticle = {toggleOpen(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openedItem: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    toggleOpen: PropTypes.func
}

export default accordion(ArticleList)