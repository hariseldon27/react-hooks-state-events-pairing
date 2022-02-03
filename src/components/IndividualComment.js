import React from 'react';

function IndividualComment( { user, comment } ) {
  //build each LI component
  
    return (
        <li>
            <p>{user}</p>
            <p>{comment}</p>
        </li>

    );
}

export default IndividualComment;
