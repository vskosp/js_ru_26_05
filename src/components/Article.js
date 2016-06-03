import React, { PropTypes, Component } from 'react'
import {ArticleComments} from './ArticleComments';

class Article extends Component {

  state = {
    isOpen: false
  };

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;

    if (!article) {
      return <h3>No article</h3>
    }
    
    const body = isOpen ? <section>{article.text}</section> : null;
    const articleComments = isOpen ? <ArticleComments comments={article.comments}/> : null;

    return (
      <div>
        <div>
          <h3 onClick = {this.toggleOpen}>{article.title}</h3>
          {body}
        </div>
        {articleComments}
      </div>
    )
  }

  toggleOpen = (ev) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}



/*
 function Article(props) {
 const { article } = props
 if (!article) return <h3>No article</h3>
 return (
 <div>
 <h3>{article.title}</h3>
 <section>{article.text}</section>
 </div>
 )
 }
 */

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    id: PropTypes.string.isRequired
  }),
  options: PropTypes.object
}

export default Article