import React from "react";
import "./Facts.css";

const Facts = ({ details }) => {
  const toStringDate = date => {
    const utcDate = new Date(date).toUTCString();
    return `${utcDate.substr(8, 3)} ${utcDate.substr(5, 2)}, ${utcDate.substr(
      12,
      4
    )}`;
  };

  const genres = details.genres.map(genre => {
    return (
      <div key={genre.id} className="genre-label">
        {genre.name}
      </div>
    );
  });

  return (
    <section className="facts">
      <h3>Facts</h3>
      <section className="status">
        <h4>Status</h4>
        <div className="status-text">{details.status}</div>
      </section>
      <section className="release-information">
        {details.release_date && (
          <React.Fragment>
            <h4>Release Information</h4>
            <div className="release-date">
              {toStringDate(details.release_date)}
            </div>
          </React.Fragment>
        )}
        {details.first_air_date && (
          <React.Fragment>
            <h4>First Air Date</h4>
            <div className="release-date">
              {toStringDate(details.first_air_date)}
            </div>
          </React.Fragment>
        )}
      </section>
      <section className="genre">
        <h4>Genre</h4>
        {genres}
      </section>
      {details.homepage && (
        <section className="homepage">
          <h4>Homepage</h4>
          <div className="homepage-text">
            <a href={details.homepage}>{details.homepage}</a>
          </div>
        </section>
      )}
      {details.runtime && (
        <section className="runtime">
          <h4>Runtime</h4>
          <div className="runtime-text">{formatRuntime(details.runtime)}</div>
        </section>
      )}

      {details.budget >= 0 && (
        <section className="budget">
          <h4>Budget</h4>
          <div className="budget-text">{formatMoney(details.budget)}</div>
        </section>
      )}

      {details.revenue >= 0 && (
        <section className="revenue">
          <h4>Revenue</h4>
          <div className="revenue-text">{formatMoney(details.revenue)}</div>
        </section>
      )}
    </section>
  );
};

const formatMoney = amount => {
  return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const formatRuntime = timeInMinutes => {
  if (timeInMinutes > 59) {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  }

  return `${timeInMinutes}m`;
};

export default Facts;
