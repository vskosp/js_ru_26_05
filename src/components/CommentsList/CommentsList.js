import React, {PropTypes}  from 'react';

export function CommentsList({comments}) {
  if (!comments) {
    return null;
  }

  const commentsItems = comments.map(comment => {
    return (
      <li key={comment.id}>
        <article>
          <h4>{comment.name}</h4>
          <p>{comment.text}</p>
        </article>
      </li>
    );
  });

  return <ul>{commentsItems}</ul>
}

const commentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
});

CommentsList.propTypes = {
  comments: React.PropTypes.arrayOf(commentType)
};