import React from "react";
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

export default PopularRow;
