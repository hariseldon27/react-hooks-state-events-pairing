import React from 'react';

function Videoplayer( { 
    src = "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    title = "Thinking in React" 
    } 
    ) {
  return (  
    <div className="App">
        <iframe
        width="919"
        height="525"
        src={src}
        frameBorder="0"
        allowFullScreen
        title={title}
        />
    </div>
    
    )
}

export default Videoplayer;

