import React from 'react';

const VideoEmbed = (props) => {
    const media_type=props.media_type
    const id=props.id
  const videoUrl = 'https://vidsrc.to/embed/'+media_type+'/'+id;
  return (
    <div>
      <iframe
        title="Embedded Video"
        width="1280"
        height="720"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
