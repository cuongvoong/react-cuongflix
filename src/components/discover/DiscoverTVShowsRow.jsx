import React from "react";
import PropTypes from "prop-types";
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

DiscoverTVShowsRow.propTypes = {
  tvShows: PropTypes.shape({
    page: PropTypes.number.isRequired,
    results: PropTypes.array.isRequired
  }),
  columnsInRow: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default DiscoverTVShowsRow;
