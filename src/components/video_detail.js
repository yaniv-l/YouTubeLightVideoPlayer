import React from 'react';

const VideoDetail = ({video}) =>{
  // In first index.js load and YTSearch has yet return a result, video will be null
  if(!video){
    return <div>Loading...</div>
  };

  const videoId = video.id.videoId;
  // ES6 Syntax efficiency - instead of concat string using the + we can use the string inside a `` isntead of '' or "", and than just enbed the variable inside a variable holder like in the below
  const url = `http://www.youtube.com/embed/${videoId}`;
  // The above line is equal to:
  /*const url = 'http://www.youtube.com/embed/' + {videoId};*/

  return(
    //<!--div className="video-detail col-md-8"-->
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
