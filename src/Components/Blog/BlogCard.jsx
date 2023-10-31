import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ item: { id, date, catgeory, title, cover, para, desc } }) {
  return (
    <>
      <div className="items">
        <div className="img">
          <img src={cover} alt="Image" />
        </div>
        <div className="category flex_space">
          <span>{date}</span>
          <label>{catgeory}</label>
        </div>

        <div className="details">
          <h3>{title}</h3>
          <p>{para}</p>
        </div>

        <button className="blog_btn primary-btn">
          <Link to={`/blogsingle/${id}`} className="blogItem-link">
            READ MORE <i className="fa fa-long-arrow-alt-right"></i>
          </Link>
        </button>
      </div>
    </>
  );
}

export default BlogCard;
