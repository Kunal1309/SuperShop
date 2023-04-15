import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={props.images} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">{props.title}</h5>
        <p className="desc">
         {props.des}
        </p>
        <Link to={`/blogs/:${props.id}`} className="button">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;