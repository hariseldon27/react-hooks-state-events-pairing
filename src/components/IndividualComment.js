import React from 'react';

function IndividualComment( { user, comment } ) {
  //build each LI component
  
    return (
        <div>
            <p style={{ fontWeight: "bold" }}>{user}</p>
            <p>{comment}</p>
        </div>

    );
}

export default IndividualComment;
