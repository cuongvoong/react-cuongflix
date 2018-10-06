import React from "react";
import PropTypes from "prop-types";
import "./VideoClips.css";

const VideoClips = ({ videos }) => {
  const videoClips = videos.map(video => {
    return (
      <section key={video.key} className="clip">
        <section className="video-clip-wrapper">
          <iframe
            width="100%"
            title="Intentionally blank"
            src={`https://www.youtube.com/embed/${video.key}?rel=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </section>
      </section>
    );
  });

  return (
    <section className="video-clips">
      <h4>Clips ({videoClips.length})</h4>
      {videoClips}
    </section>
  );
};

VideoClips.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoClips;
