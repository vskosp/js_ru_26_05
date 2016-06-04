import React, {createClass, PropTypes} from 'react';
import {toggleOpenListItem} from '../mixins/toggleOpenListItem';
import Article from './Article'

export const ArticleListOld = createClass({
  mixins: [toggleOpenListItem],

  propTypes: {
    articles: PropTypes.array.isRequired
  },
  
  render() {
    const {articles} = this.props;

    const articleItems = articles.map((article) => <li key={article.id}>
      <Article article = {article}
               isOpen = {article.id === this.state.openedItem}
               openArticle = {this.toggleOpenItem(article.id)}
      />
    </li>);

    return (
      <ul>
        {articleItems}
      </ul>
    )
  }
});
