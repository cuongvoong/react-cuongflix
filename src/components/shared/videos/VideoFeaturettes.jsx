import React from "react";
import PropTypes from "prop-types";
import "./VideoFeaturettes.css";

const VideoFeaturettes = ({ videos }) => {
  const videoFeaturettes = videos.map(video => {
    return (
      <section key={video.key} className="featurette">
        <section className="video-featurette-wrapper">
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
    <section className="video-featurettes">
      <h4>Featurettes ({videoFeaturettes.length})</h4>
      {videoFeaturettes}
    </section>
  );
};

VideoFeaturettes.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoFeaturettes;
