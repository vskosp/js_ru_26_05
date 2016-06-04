import React, { PropTypes, Component } from 'react'
import Article from './Article'
import {toggleOpenListItem} from '../decorators/toggleOpenListItem';

class ArticleList extends Component {

    render() {
        const {articles, openedItem, toggleOpenItem} = this.props

        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === openedItem}
                openArticle = {toggleOpenItem(article.id)}
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
    articles: PropTypes.array.isRequired
}

export default toggleOpenListItem(ArticleList);