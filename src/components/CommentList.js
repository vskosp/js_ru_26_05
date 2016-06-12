import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static defaultProps = {

    }

    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        onAddComment: PropTypes.func
    };
    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
                {this.getInput()}
            </div>
        )
    }

    componentDidMount() {
        console.log('I am mounted')
    }

    componentWillUpdate(nextProps) {
        console.log(this.props.isOpen, ' changes to ', nextProps.isOpen)
    }


    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        if (!comments || !comments.length) return <h3>No comments yet</h3>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{items}</ul>
    }

    getInput() {
        const { isOpen } = this.props;

        if (!isOpen) {
            return null;
        }

        return (
          <form onSubmit={this.addComment}>
              <textarea
                placeholder="Add a comment"
                ref="commentTextArea"
                style={{width:'300px'}}
              />
              <br/>
              <button type="submit">Add Comment</button>
          </form>
        );
    }

    addComment = (ev) => {
        const {onAddComment} = this.props;
        const {commentTextArea} = this.refs;
        
        onAddComment(ev, commentTextArea.value);
        commentTextArea.value = '';
    }
}

export default toggleOpen(CommentList)