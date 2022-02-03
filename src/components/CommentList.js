import React from 'react';
import video from '../data/video.js'
import IndividualComment from './IndividualComment';



function CommentList() {
  console.log(`this is the video object in comment list: ${video}`)
  return (
    <ul>
    {video.comments.map((comment) => {
        return <IndividualComment key={comment.id} user={comment.user} comment={comment.comment}/>
      })}
  </ul>
  )
}

export default CommentList;
