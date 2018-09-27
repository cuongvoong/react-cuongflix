import React from "react";
import PropTypes from "prop-types";
import "./GalleryContent.css";
import GalleryItem from "./GalleryItem";

const GalleryContent = ({ search }) => {
  const searchMovieResults = search.movies.results
    .filter(item => item.poster_path !== null)
    .map(item => {
      return <GalleryItem key={item.id} href="/movie" item={item} />;
    });

  const searchTVShowsResults = search.tvShows.results
    .filter(item => item.poster_path !== null)
    .map(item => {
      return <GalleryItem key={item.id} href="/tvshow" item={item} />;
    });
  return (
    <div className="gallery">
      {searchMovieResults.length > 0 && (
        <React.Fragment>
          <h2>Movies</h2>
          <div className="gallery-content">{searchMovieResults}</div>
        </React.Fragment>
      )}
      {searchTVShowsResults.length > 0 && (
        <React.Fragment>
          <h2>TV Shows</h2>
          <div className="gallery-content">{searchTVShowsResults}</div>
        </React.Fragment>
      )}
    </div>
  );
};

GalleryContent.propTypes = {
  search: PropTypes.shape({
    movies: PropTypes.shape({
      results: PropTypes.array.isRequired
    }),
    tvShows: PropTypes.shape({
      results: PropTypes.array.isRequired
    })
  })
};

export default GalleryContent;
