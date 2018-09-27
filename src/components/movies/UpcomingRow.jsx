import React from "react";
import PropTypes from "prop-types";
import RowHeader from "../main/RowHeader";
import Row from "../main/Row";

const UpcomingRow = ({ movies, columnsInRow, totalItems }) => {
  return (
    <React.Fragment>
      <RowHeader title="Upcoming" />
      <Row
        href="/movie"
        results={movies.results}
        columnsInRow={columnsInRow}
        totalItems={totalItems}
      />
    </React.Fragment>
  );
};

UpcomingRow.propTypes = {
  movies: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  columnsInRow: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default UpcomingRow;
