import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogData from "./BlogData";

function AllBlog() {
  const [items, setItems] = useState(BlogData);
  return (
    <>
      <section className="blog top">
        <div className="container">
          <div className="content grid blog_content">
            {items.map((item) => {
              return <BlogCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllBlog;
