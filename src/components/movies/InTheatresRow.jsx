import React from "react";
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

export default InTheatresRow;
