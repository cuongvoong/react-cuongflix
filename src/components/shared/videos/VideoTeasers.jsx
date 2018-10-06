import React from "react";
import PropTypes from "prop-types";
import "./VideoTeasers.css";

const VideoTeasers = ({ videos }) => {
  const videoTeasers = videos.map(video => {
    return (
      <section key={video.key} className="teaser">
        <section className="video-teaser-wrapper">
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
    <section className="video-teasers">
      <h4>Teasers ({videoTeasers.length})</h4>
      {videoTeasers}
    </section>
  );
};

VideoTeasers.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoTeasers;
