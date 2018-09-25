import React from "react";
import "./Videos.css";
import VideoTrailer from "./VideoTrailer";

const Videos = ({ videos }) => {
  const videoTrailers = videos.results.filter(
    video => video.site === "YouTube"
  );

  const videoTrailersToRender = videoTrailers.map(video => {
    return <VideoTrailer key={video.id} videoKey={video.key} />;
  });
  return (
    <section className="videos">
      <h3>Videos</h3>
      <section className="video-trailers">{videoTrailersToRender}</section>
    </section>
  );
};

export default Videos;
