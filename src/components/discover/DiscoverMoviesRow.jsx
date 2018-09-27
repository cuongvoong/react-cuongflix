import React from "react";
import PropTypes from "prop-types";
import RowHeader from "../main/RowHeader";
import Row from "../main/Row";

const DiscoverMoviesRow = ({ movies, columnsInRow, totalItems }) => {
  return (
    <React.Fragment>
      {movies.page === 1 && <RowHeader title="Discover Movies" />}
      <Row
        href="/movie"
        results={movies.results}
        columnsInRow={columnsInRow}
        totalItems={totalItems}
      />
    </React.Fragment>
  );
};

DiscoverMoviesRow.propTypes = {
  movies: PropTypes.shape({
    page: PropTypes.number.isRequired,
    results: PropTypes.array.isRequired
  }),
  columnsInRow: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default DiscoverMoviesRow;
