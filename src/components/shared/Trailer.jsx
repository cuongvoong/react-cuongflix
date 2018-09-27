import React from "react";
import PropTypes from "prop-types";
import "./Trailer.css";

const Trailer = ({ trailers }) => {
  const videoTrailers = trailers.results.find(video => {
    return video.type === "Trailer" && video.site === "YouTube";
  })
    ? trailers.results.filter(
        video => video.type === "Trailer" && video.site === "YouTube"
      )
    : trailers.results.filter(video => video.site === "YouTube");

  return (
    <section className="trailer-wrapper">
      <section className="trailer">
        {videoTrailers.length && (
          <iframe
            title="Intentionally blank"
            width="100%"
            src={`https://www.youtube.com/embed/${
              videoTrailers[0].key
            }?modestbranding=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </section>
    </section>
  );
};

Trailer.propTypes = {
  trailers: PropTypes.shape({
    results: PropTypes.array.isRequired
  })
};

export default Trailer;
