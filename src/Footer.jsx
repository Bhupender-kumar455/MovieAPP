import React from "react";
import "./Footer.css";
import {
  faFacebook,
  faReddit,
  faTelegram,
  faWhatsapp,
  faFacebookMessenger,
  faSquareXTwitter,
  faXTwitter,
  faInstagram,
  faPinterest,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsToCircle,
  faBell,
  faSeedling,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="firstSection">
        <h1>
          Picture<span>Verse</span>
        </h1>
        <p>A place to where watch Movies,Anime and Series</p>
      </div>
      <div className="secondSection">
        <div className="first">
          <p style={{ color: "#dee2e6" }}>
            You can follow us on our social media sites where you will get
            latest update early
          </p>
          <div className="socialIcon">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon
                className="icon"
                style={{ color: "#aaaaaa" }}
                icon={faFacebook}
              />
            </a>
            <a href="https://www.twitter.com">
              <FontAwesomeIcon
                className="icon"
                style={{ color: "#aaaaaa" }}
                icon={faXTwitter}
              />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon
                className="icon"
                style={{ color: "#aaaaaa" }}
                icon={faInstagram}
              />
            </a>
            <a href="https://www.pinterest.com">
              <FontAwesomeIcon
                className="icon"
                style={{ color: "#aaaaaa" }}
                icon={faPinterest}
              />
            </a>
            <a href="https://www.vimeo.com">
              <FontAwesomeIcon
                className="icon"
                style={{ color: "#aaaaaa" }}
                icon={faVimeo}
              />
            </a>
          </div>
        </div>
        <div className="second">
          <h5 style={{ color: "#aaaaaa" }}> Affilate with</h5>
          <h6>Netflix</h6>
          <h6>Aniwave</h6>
          <h6>Hotstar</h6>
          <h6>Disney</h6>
        </div>
        <div className="third">
          <h5 style={{ color: "#aaaaaa" }}> PlatformOf</h5>
          <h6>Anime</h6>
          <h6>Hollywood</h6>
          <h6>Disney</h6>
          <h6>Cartoon</h6>
        </div>
        <div className="fourth">
          <h5 style={{ color: "#aaaaaa" }}>Get updates!</h5>
          <p>
            Subscribe our newletter where you will receive trending stuff and
            latest thing
          </p>
          <div className="form">
            <input type="" alt="Write your Email!" placeholder="Enter email" />
            <button>
              <FontAwesomeIcon className="icon" icon={faBell} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
