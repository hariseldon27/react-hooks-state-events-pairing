import video from "../data/video"
import CommentList from "./CommentList"

function VidDeetz ( { views, createdAt, upvotes, downvotes, comments  } ) {
    return (
        //also show our info about
        <div>
            <h3>Theese are deeetz about the viid</h3>
            <button >upvote</button>
            <button >downvote</button>
            <button >ShowComments ? "Show Comments" : "Hide Comments"</button>
            <CommentList />
        </div>

    )
}

export default VidDeetz

// key = {video.comments.id}