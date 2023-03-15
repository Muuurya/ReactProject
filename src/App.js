import React, { Component } from "react";
import "./App.css";
import man from "./assets/Ellipse 1.jpg";
import text from "./assets/Rectangle 30.jpg";
import woman from "./assets/Rectangle 32.jpg";
import shape from "./assets/Rectangle 34.jpg";
import icon1 from "./assets/facebook.svg";
import icon2 from "./assets/insta.svg";
import icon3 from "./assets/twit.svg";
import icon4 from "./assets/Linkedin.svg";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header>
            <ul>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </header>
          <div className="wrapper1">
            <div className="wrap1">
              <h1 className="head1">Hi, I am John, Creative Technologist</h1>
              <p className="p-section1">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="btn-1" type="button">
                Download Resume
              </button>
            </div>
            <div className="wrap2">
              <img src={man} alt="" />
            </div>
          </div>
          <div className="wrapper2">
            <div className="text">
              <h1 className="head2">Recent posts</h1>
              <a className="link1" href="#">
                View all
              </a>
            </div>
            <div className="wrap3">
              <div className="box1">
                <h1 className="head3">Making a design system from scratch</h1>
                <p className="p-section2">12 Feb 2020 | Design, Pattern</p>
                <p className="p-section3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="box2">
                <h1 className="head4">Making a design system from scratch</h1>
                <p className="p-section4">12 Feb 2020 | Design, Pattern</p>
                <p className="p-section5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper3">
            <h1 className="head5">Featured works</h1>
            <div className="wrap4">
              <div className="image">
                <img src={text} alt="" />
              </div>
              <div className="texts">
                <h1 className="head6">Designing Dashboards</h1>
                <button className="btn-2" type="button">
                  2022
                </button>
                <a className="link2" href="#">
                  Dashboard
                </a>
                <p className="p-section6">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="line"></div>
            <div className="wrap5">
              <div className="image2">
                <img src={woman} alt="" />
              </div>
              <div className="texts2">
                <h1 className="head7">Designing Dashboards</h1>
                <button className="btn-3" type="button">
                  2022
                </button>
                <a className="link3" href="#">
                  Dashboard
                </a>
                <p className="p-section7">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="line"></div>
            <div className="wrap6">
              <div className="image3">
                <img src={shape} alt="" />
              </div>
              <div className="texts3">
                <h1 className="head8">Designing Dashboards</h1>
                <button className="btn-4" type="button">
                  2022
                </button>
                <a className="link4" href="#">
                  Dashboard
                </a>
                <p className="p-section8">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="line"></div>
          </div>
          <footer>
            <div className="wrap7">
              <img className="icon" src={icon1} alt="" />
              <img className="icon" src={icon2} alt="" />
              <img className="icon" src={icon3} alt="" />
              <img className="icon" src={icon4} alt="" />
              <p className="p-section9">Copyright ©2020 All rights reserved </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
