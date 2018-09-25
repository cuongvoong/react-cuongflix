import React from "react";
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

export default UpcomingRow;
