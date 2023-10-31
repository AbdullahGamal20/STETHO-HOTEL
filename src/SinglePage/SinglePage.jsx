import React, { useEffect, useState } from "react";
import HeadTitle from "../Components/HeadTitle/HeadTitle";
import "./singlePage.css";
import { Link, useParams } from "react-router-dom";
import AllItem from "../Components/Destinations/AllItem";
import Sdata from "../Components/Destinations/Sdata";
import EmptyFile from "../EmptyFile/EmptyFile";

function SinglePage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      <HeadTitle />

      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/destination" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>
            <article className="content flex">
              <div className="main-content">
                <img src={item.image} alt="Image" />
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className="para flex_space">
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>

                <h1> What is the {item.title} City ?</h1>
                <p>{item.sidepara}</p>

                <div className="image grid1">
                  <img src={item.paraImage_one} alt="Image" />
                  <img src={item.paraImage_two} alt="Image" />
                </div>
                <p>{item.sidepara}</p>
              </div>

              <div className="side-content">
                <div className="box">
                  <h2>How can we help you ?</h2>
                  <p>{item.sidepara}</p>
                  <button className="outline-btn">
                    <i className="fa fa-phone-alt"></i> Contact Us
                  </button>
                </div>

                <div className="box2 ">
                  <p>{item.sidepara}</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
}

export default SinglePage;
