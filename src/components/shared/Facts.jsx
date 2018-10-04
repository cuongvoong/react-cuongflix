import React from "react";
import PropTypes from "prop-types";
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

  const release_date =
    details.release_dates !== undefined
      ? details.release_dates.results
          .filter(r => r.iso_3166_1 === "US")
          .reduce((acc, item) => (acc = item)).release_dates
      : null;

  const release_information =
    details.release_dates !== undefined
      ? release_date.map(r => {
          return (
            <div key={r.type} className="release-date">
              {toStringDate(r.release_date)}
              <div className="certification-type-row">
                {r.certification !== "" && (
                  <span className="certification">{r.certification}</span>
                )}
                <span className="type">{types[r.type]}</span>
              </div>
            </div>
          );
        })
      : null;

  return (
    <section className="facts">
      <h3>Facts</h3>
      <section className="status">
        <h4>Status</h4>
        <div className="status-text">{details.status}</div>
      </section>
      <section className="release-information">
        {release_date && (
          <React.Fragment>
            <h4>Release Information</h4>
            {release_information}
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
        <h4>Genres</h4>
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

Facts.propTypes = {
  details: PropTypes.object.isRequired
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

const types = {
  1: "Premiere",
  2: "Theatrical (limited)",
  3: "Theatrical",
  4: "Digital",
  5: "Physical",
  6: "TV"
};

export default Facts;
