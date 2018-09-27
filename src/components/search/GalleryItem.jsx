import React from "react";
import PropTypes from "prop-types";
import "./GalleryItem.css";
import { Link } from "react-router-dom";
import Poster from "../shared/Poster";

const GalleryItem = ({ href, item }) => {
  return (
    <div className="gallery-item">
      {/* <Link to={{ pathname: `${href}/${item.id}`, state: { id: item.id } }}> */}
      <Link to={`${href}/${item.id}`}>
        <Poster key={item.id} details={item} />
      </Link>
    </div>
  );
};

GalleryItem.propTypes = {
  href: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired
};

export default GalleryItem;
