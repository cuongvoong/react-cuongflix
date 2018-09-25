import React from "react";
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

export default PopularRow;
