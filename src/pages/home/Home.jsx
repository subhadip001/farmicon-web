import React from "react";
import zigzag from "../../assets/zigzag-arrow.png";
import ourService from "../../assets/our-service.png";
import googlePlay from "../../assets/google-play.png";
import blog1 from "../../assets/blog-image-1.png";
import blog2 from "../../assets/blog-image-2.png";
import blog3 from "../../assets/blog-image-3.png";
import upArrow from "../../assets/up-arrow.png";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <section className="sec-1" id="sec-1">
          <img src={zigzag} alt="" draggable="false" />
          <div className="intro">
            <div className="left">
              <span className="span-1">Increase your</span>
              <span className="span-2">YIELD WITH</span>
            </div>
            <span>FARMICON</span>
          </div>
          <div className="button-and-arrow">
            <a href="#sec-2">
              <span>Get Started</span>
            </a>
          </div>
        </section>
        <section className="sec-2" id="sec-2">
          <div className="container">
            <div className="left-box">
              <span>Our Services</span>
              <p>
                We are single click platform where farmers can get the guidance,
                market reach, all the essential services for crops and veggies,
                solutions for crop disease using the{" "}
                <em> Mobility Integrated Artificial Intelligence </em> model,
                weather information to save the crops, account management etc.
              </p>
              <Link to="/services">All Services</Link>
            </div>
            <div className="right-box">
              <img src={ourService} alt="" draggable="false" />
            </div>
          </div>
        </section>
        <section className="sec-3" id="sec-3">
          <div className="container">
            <div className="left-box">
              <span>
                Do More<span> on the app</span>
              </span>
              <p>We have some exclusive features packed in our application</p>
            </div>
            <div className="right-box">
              <div className="logo"></div>
              <img src={googlePlay} alt="" />
            </div>
          </div>
        </section>
        <section className="sec-4" id="sec-4">
          <a href="#sec-1">
            <div className="up">
              <img src={upArrow} alt="" draggable="false" />
            </div>
          </a>
          <div className="container">
            <span>Blogs</span>
            <div className="blogs">
              <div className="blog">
                <img src={blog1} alt="" />
                <div className="desc">
                  <p>
                    B.C. Farmers , Ranchers benefit with extreme weather
                    support.
                  </p>
                  <div className="blog-more">
                    <Link to="/">Read More</Link>
                    <span>July 2021</span>
                  </div>
                </div>
              </div>
              <div className="blog">
                <img src={blog2} alt="" />
                <div className="desc">
                  <p>
                    B.C. Farmers , Ranchers benefit with extreme weather
                    support.
                  </p>
                  <div className="blog-more">
                    <Link to="/">Read More</Link>
                    <span>July 2021</span>
                  </div>
                </div>
              </div>
              <div className="blog">
                <img src={blog3} alt="" />
                <div className="desc">
                  <p>
                    B.C. Farmers , Ranchers benefit with extreme weather
                    support.
                  </p>
                  <div className="blog-more">
                    <Link to="/">Read More</Link>
                    <span>July 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
