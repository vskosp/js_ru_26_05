import React, {Component} from 'react';
import {CommentsList} from './CommentsList/CommentsList';

export class ArticleComments extends Component {
  state = {
    isOpen: false
  };

  render() {
    const {comments} = this.props;

    if (!comments) {
      return null;
    }

    const buttonText = this.state.isOpen ? 'Hide comments' : 'Show comments';
    const commentsList = this.state.isOpen ? <CommentsList comments={comments}/> : null;

    return (
      <div>
        <button onClick={this.toggleOpen}>
          {buttonText}
        </button>
        {commentsList}
      </div>
    );
  }
  
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };
}