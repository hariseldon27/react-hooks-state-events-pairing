import react, { useState } from 'react'
import video from "../data/video"
import CommentList from "./CommentList"

function VidDeetz () {
    const [showComments, setShowComments] = useState(false)
    const [votes, setVotes] = useState({
        upvotes: video.upvotes,
        downvotes: video.downvotes
    })

    function handleShowCommentsClick() {
        setShowComments((showComments) => !showComments)
    }

    function potatoFun(food) {
        return {...food, upvotes: ++food.upvotes}
    }

    function handleVoteClick(id) {
        if (id === 1) {
            //setVotes({...votes, upvotes: votes.upvotes + 1})
            setVotes(potatoFun)
        }
        if (id === 2) {
            setVotes({...votes, downvotes: votes.downvotes + 1})
        }
    }

    return (
        //also show our info about
        <div>
            <h3>{video.title}</h3>
            <p>{video.views} views | {video.createdAt}</p>
            <button onClick={() => handleVoteClick(1)}>{votes.upvotes}👍</button>
            <button onClick={() => handleVoteClick(2)}>{votes.downvotes}👎</button>
            <button onClick={handleShowCommentsClick}>{showComments ? "Show Comments" : "Hide Comments"}</button>
            {!showComments ? <CommentList /> : null}
        </div>

    )
}

export default VidDeetz

// key = {video.comments.id}