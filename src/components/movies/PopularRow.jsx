import React from "react";
import PropTypes from "prop-types";
import RowHeader from "../main/RowHeader";
import Row from "../main/Row";

const PopularRow = ({ movies, columnsInRow, totalItems }) => {
  return (
    <React.Fragment>
      <RowHeader title="Popular" />
      <Row
        href="/movie"
        results={movies.results}
        columnsInRow={columnsInRow}
        totalItems={totalItems}
      />
    </React.Fragment>
  );
};

PopularRow.propTypes = {
  movies: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  columnsInRow: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default PopularRow;
