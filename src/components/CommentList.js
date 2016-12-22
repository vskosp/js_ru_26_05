import React, { PropTypes } from 'react';

export default function CommentList({ comments }) {
  if (!comments) {
    return null;
  }

  return (
    <ul>
      { comments.map(comment => (
        <li key={ comment.id }>
          <h3>{ comment.name }</h3>
          <p>{ comment.text }</p>
        </li>
      ))}
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    text: PropTypes.string
  }))
};
