import React from "react";
import PropTypes from "prop-types";
import RowHeader from "../main/RowHeader";
import Row from "../main/Row";

const OnTVRow = ({ tvShows, columnsInRow, totalItems }) => {
  return (
    <React.Fragment>
      <RowHeader title="On TV" />
      <Row
        href="/tvshow"
        results={tvShows.results}
        columnsInRow={columnsInRow}
        totalItems={totalItems}
      />
    </React.Fragment>
  );
};

OnTVRow.propTypes = {
  tvShows: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  columnsInRow: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default OnTVRow;
