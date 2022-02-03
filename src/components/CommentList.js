import React from 'react';
import video from '../data/video.js'
import IndividualComment from './IndividualComment';



function CommentList() {
  return (
    <p>
    {video.comments.map((comment) => {
        return <IndividualComment key={comment.id} user={comment.user} comment={comment.comment}/>
      })}
  </p>
  )
}

export default CommentList;
