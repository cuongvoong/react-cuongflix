import React from "react";
import RowHeader from "../main/RowHeader";
import Row from "../main/Row";

const DiscoverTVShowsRow = ({ tvShows, columnsInRow, totalItems }) => {
  return (
    <React.Fragment>
      {tvShows.page === 1 && <RowHeader title="Discover TV Shows" />}
      <Row
        href="/tvShow"
        results={tvShows.results}
        columnsInRow={columnsInRow}
        totalItems={totalItems}
      />
    </React.Fragment>
  );
};

export default DiscoverTVShowsRow;
