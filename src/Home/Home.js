import React from "react";
import "./Home.css";
import events from './../Events/EventsList';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import { Tween } from 'react-gsap';

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="Home">

      <section className="hero">
        <div className="content">
          {/*}
          <h1>
            <span>FINANCE</span> AND <span>ECONOMICS</span> SOCIETY
          </h1>
          <p>
            Creating a vibrant women community of finance and economics
            enthusiasts
          </p>
          <div className="button-container">
            <a
              href="https://www.igdtuw.ac.in/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                className="button1"
                data-inline="true"
                type="button"
              >
                IGDTUW
                <span className="tooltip-text">Visit site</span>
              </button>
            </a>
            <a
              href="https://www.instagram.com/finivesta_igdtuw/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                className="button2"
                data-inline="true"
                type="button"
              >
                View More
              </button>
            </a>
          </div>
          */}
        </div>
      </section>

      {/* Banner Section */}

      {/*
      <section className="banner">
        <div className="banner-content">
          <button
            className="banner-button"
            onClick={() => (window.location.href = "/finweek25")}
          >
            Learn More
          </button>
        </div>
      </section>
      */}

      {/* Jhalak's code */}
      <section className="course">
        <h2 className="subtitle">About Us</h2>
        
        <div className="rows">
        <p className="abc">
              Finivesta, the Finance and Economics society of IGDTUW, is a
              women-led organization that provides students with various
              opportunities that helps them to enhance their financial
              knowledge, gain practical insights through workshops, seminars,
              events and competitions with the aim of encapsulating financial 
              principles, patience, risk management in bright young minds. 
              We aim for excellence across all financial fields, helping students 
              connect with key stakeholders while cultivating passion and self-investment in young minds.
            </p>
          {/*
          <div className="col-2">
            <p className="abc">
              Finivesta, the Finance and Economics society of IGDTUW, is a
              women-led organization that provides students with various
              opportunities that helps them to enhance their financial
              knowledge, gain practical insights through workshops, seminars,
              events and competitions with the aim of encapsulating financial
              principles, patience, risk management in bright young minds. We
              strive for excellence in every financial domain and connect
              students to various shareholders of the same and nurture young
              minds with the values of passion and self investment.
            </p>
          </div>
          <div className="col-1">
            <img src={F1} alt="F1" />
          </div>
          */}
        </div>
        <div className="list">

        {/* <Tween
          from={{ x: '90vw', opacity: 0 }}
          to={{ x: '0vw', opacity: 1 }}
          duration={5}
          ease="none"
          scrollTrigger={{
            trigger: '.mvo-box',
            start: 'top 90%',
            end: '+=70%',
            scrub: true,
            toggleActions: 'play none none reverse',
          }} */}
        
          <div className="mvo-box">
            <h1>MISSION</h1>
            <p>
              Our mission is to cultivate a dynamic and inclusive community of
              women passionate about finance, empowering them to build confidence, leadership
              skills, and a deeper undertsanding of the financial world.
              Through engaging educational events, impactful networking opportunities, and
              community outreach, we aim to promote financial literacy, inspire excellence, and create a 
              supportive space where women can thrive in the ever-changing world of
              finance.
            </p>
          </div>
          
          <div className="mvo-box">
            <h1>OBJECTIVE</h1>
            <p>
              Our primary objective is to empower young girls with a strong understanding
              of financial concepts and the confidence to navigate them easily. We
              aim to communicate key financial knowledge while fostering awareness of ethics and social
              responsibility in finance. By making topics like the stock market, bonds and
              debentures more approachable, we strive to unlock their true potential 
              and inspire them to take charge of their financial futures with assurance and skill.
            </p>
          </div>
          
          <div className="mvo-box">
            <h1>VISION</h1>
            <p>
              <i>If you do not manage your money, your money will manage you.</i> Our
              vision is to empower
              women to become financially literate and make informed
              decisions, rooted in the belief that financial
              literacy is essential for unlocking their full potential.
              Finivesta strives to achieve this vision by providing a platform where
              women can engage with economics economics through workshops, seminars, and
              dynamic events, fostering both knowledge and confidence.
            </p>
          </div>
          {/* </Tween> */}
          
        </div>
      </section>

      {/* Disha's Code */}

      <div className="Carousel">
        {" "}
        <section className="section-carousel">
          <div className="carousel">
            <h2 className="subtitle">Recent Events</h2>
            <Slider {...settings}>
              {events.slice(0, 6).map((event, index) => (
                <div key={index} className="box">
                  <a href={event.link} target="_blank" rel="noreferrer">
                    <img src={event.photo} alt={event.name} />
                  </a>
                  <div className="shade-home">{event.byline}</div>
            </div>
              ))}

            </Slider>
          </div>
        </section>
    {" "}
      </div>
    </div>
  );
};

export default Home;
