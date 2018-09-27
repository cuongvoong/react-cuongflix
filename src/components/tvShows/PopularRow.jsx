import React from "react";
import PropTypes from "prop-types";
import RowHeader from "../main/RowHeader";
import Row from "../main/Row";

const PopularRow = ({ tvShows, columnsInRow, totalItems }) => {
  return (
    <React.Fragment>
      <RowHeader title="Popular" />
      <Row
        href="/tvshow"
        results={tvShows.results}
        columnsInRow={columnsInRow}
        totalItems={totalItems}
      />
    </React.Fragment>
  );
};

PopularRow.propTypes = {
  tvShows: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  columnsInRow: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default PopularRow;
