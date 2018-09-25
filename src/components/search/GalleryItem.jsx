import React from "react";
import "./GalleryItem.css";
import { Link } from "react-router-dom";
import Poster from "../shared/Poster";

const GalleryItem = ({ href, item }) => {
  return (
    <div className="gallery-item">
      <Link to={{ pathname: `${href}/${item.id}`, state: { id: item.id } }}>
        <Poster key={item.id} details={item} />
      </Link>
    </div>
  );
};

export default GalleryItem;
