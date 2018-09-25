import React from "react";
import "./VideoTrailer.css";

const VideoTrailer = ({ videoKey }) => {
  return (
    <section className="video-trailer">
      <section className="video-trailer-wrapper">
        <iframe
          width="100%"
          title="Intentionally blank"
          src={`https://www.youtube.com/embed/${videoKey}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </section>
    </section>
  );
};

export default VideoTrailer;
