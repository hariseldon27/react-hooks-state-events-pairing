import React, { useState } from 'react';
import video from "../data/video.js";
import Videoplayer from './Videoplayer'
import VidDeetz from "./VidDeetz"


/*----------------------------------------------------------------
App
  |-Video
  |-VidDeetz
    |-video info (map)
    |-up/down vt buttons (increment)
    |-show/hide comment buttons (filter)
      |-comment section (map)



/*----------------------------------------------------------------*/


function App() {

  console.log("Here's your data:", video);

  return (
    <div>
      <Videoplayer src={video.embedUrl} title={video.title} />
      <VidDeetz />
    </div>

  );
}

export default App;
