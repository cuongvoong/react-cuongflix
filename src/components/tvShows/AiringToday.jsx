import React from "react";
import RowHeader from "../main/RowHeader";
import Row from "../main/Row";

const AiringToday = ({ tvShows, columnsInRow, totalItems }) => {
  return (
    <React.Fragment>
      <RowHeader title="Airing Today" />
      <Row
        href="/tvshow"
        results={tvShows.results}
        columnsInRow={columnsInRow}
        totalItems={totalItems}
      />
    </React.Fragment>
  );
};

export default AiringToday;
