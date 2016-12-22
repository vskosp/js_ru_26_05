import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList';

class Article extends Component {

    state = {
        isOpen: false,
        isCommentsShown: false
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state

        if (!article) return <h3>No article</h3>
        const body = isOpen ? <section>{article.text}</section> : null
        const comments = isOpen ? this.renderComments() : null;

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
                {comments}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComments = () => {
        this.setState({
            isCommentsShown: !this.state.isCommentsShown
        });
    };

    renderComments() {
        const { comments } = this.props.article;

        if (!comments) {
            return null;
        }

        const { isCommentsShown } = this.state;

        return (
          <div>
              <button onClick={ this.toggleComments }>
                  { isCommentsShown ? 'Hide comments' : 'Show comments' }
              </button>
              <div>
                  { isCommentsShown ? <CommentList comments={ comments } /> : null }
              </div>
          </div>
        );
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
        id: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
              id: PropTypes.number,
              name: PropTypes.string,
              text: PropTypes.string
          })
        )
    }),
    options: PropTypes.object
}

export default Article