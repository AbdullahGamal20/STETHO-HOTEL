import React from "react";
import "./gallery.css";
import HeadTitle from "../HeadTitle/HeadTitle";
import Card from "./Card";
import { GalleryData } from "./GalleryData";
function Gallery() {
  return (
    <>
      <HeadTitle />
      <section className="gallery top">
        <div className="container grid">
          {GalleryData.map((value, index) => {
            return <Card key={index} images={value.img} title={value.title} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;
