import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
  // The above syntax for ({video}) is an ES6 syntax that says the props has a propery called video, so pull it off and place it in a variable called vidoe. This is equal to use the below line if passing (props)
/*const VideoListItem = (props) => {
    const video = props.video;*/

  //console.log(video); // For Debug - see the respose from Youtube

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
