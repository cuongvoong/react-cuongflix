import React from "react";
import PropTypes from "prop-types";
import "./Videos.css";
import VideoTrailers from "./VideoTrailers";
import VideoTeasers from "./VideoTeasers";
import VideoClips from "./VideoClips";
import VideoFeaturettes from "./VideoFeaturettes";

const Videos = ({ videos }) => {
  const videoTrailers = videos.results.filter(
    video => video.site === "YouTube" && video.type === "Trailer"
  );

  const videoTeasers = videos.results.filter(
    video => video.site === "YouTube" && video.type === "Teaser"
  );

  const videoClips = videos.results.filter(
    video => video.site === "YouTube" && video.type === "Clip"
  );

  const videoFeaturettes = videos.results.filter(
    video => video.site === "YouTube" && video.type === "Featurette"
  );

  return (
    <React.Fragment>
      {(!!videoTrailers.length ||
        !!videoTeasers.length ||
        !!videoClips.length ||
        !!videoFeaturettes.length) && (
        <section className="videos">
          <h3>Videos</h3>
          {!!videoTrailers.length && <VideoTrailers videos={videoTrailers} />}
          {!!videoTeasers.length && <VideoTeasers videos={videoTeasers} />}
          {!!videoClips.length && <VideoClips videos={videoClips} />}
          {!!videoFeaturettes.length && (
            <VideoFeaturettes videos={videoFeaturettes} />
          )}
        </section>
      )}
    </React.Fragment>
  );
};

Videos.propTypes = {
  videos: PropTypes.shape({
    results: PropTypes.array.isRequired
  })
};

export default Videos;
