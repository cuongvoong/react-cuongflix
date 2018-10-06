import React from "react";
import PropTypes from "prop-types";
import "./VideoTrailers.css";

const VideoTrailers = ({ videos }) => {
  const videoTrailers = videos.map(video => {
    return (
      <section key={video.key} className="trailer">
        <section className="video-trailer-wrapper">
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
    <section className="video-trailers">
      <h4>Trailers ({videoTrailers.length})</h4>
      {videoTrailers}
    </section>
  );
};

VideoTrailers.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoTrailers;
