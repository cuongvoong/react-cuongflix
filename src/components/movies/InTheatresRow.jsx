import React from "react";
import PropTypes from "prop-types";
import RowHeader from "../main/RowHeader";
import Row from "../main/Row";

const InTheatresRow = ({ movies, columnsInRow, totalItems }) => {
  return (
    <React.Fragment>
      <RowHeader title="In Theatres" />
      <Row
        href="/movie"
        results={movies.results}
        columnsInRow={columnsInRow}
        totalItems={totalItems}
      />
    </React.Fragment>
  );
};

InTheatresRow.propTypes = {
  movies: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  columnsInRow: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default InTheatresRow;
