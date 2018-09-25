import React from "react";
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

export default DiscoverMoviesRow;
