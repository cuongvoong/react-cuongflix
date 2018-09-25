import React from "react";
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

export default OnTVRow;
