import { useEffect, useState } from "react";
import fetchFromAPI from "../utils/fetchFromAPI";
import "./first.css";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import {
  faFacebook,
  faReddit,
  faTelegram,
  faWhatsapp,
  faFacebookMessenger,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Recently from "./Recently";
import Rightbar from "./Rightbar";
function First() {
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const [real, setReal] = useState([]);
  const [data, setData] = useState([]);
  const [recent, setRecent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [third, setThird] = useState();
  const [send, setSend] = useState();

  const [clicked, setClicked] = useState(null);
  useEffect(() => {
    fetchFromAPI(`shows`).then((data) => {
      let first = data.data;
      setReal(first);
      let firstFifty = first.slice(0, 20);
      let secondFifty = first.slice(50, 150);
      let thirdPart = first.slice(100, 110);
      setThird(thirdPart);
      setRecent(secondFifty);
      setData(firstFifty);
      setIsLoading(false);
    });
  }, []);
  const filterData = send
    ? real.filter((item) => item.genres.includes(send))
    : real.slice(20, 50);
  const handleClick = (value) => {
    setSend(value);
    setClicked(value);
  };
  return (
    <div style={{ backgroundColor: "#0e0e0e" }}>
      {isLoading ? <p>Loading...</p> : <Carousel data={data} />}
      <div className="share-card">
        <div className="text-part">
          <p>
            <FontAwesomeIcon style={{ padding: "0 5px" }} icon={faInfoCircle} />
            If you enjoy the website, please consider sharing with your
            friends.Thankyou!
          </p>
        </div>
        <div className="icon-part">
          <span>
            1.6B <br />
            Shares
          </span>
          <button className="facebook-btn">
            <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faFacebook} />
            {isMobile ? null : "29.5M"}
          </button>
          <button className="x-btn">
            <FontAwesomeIcon
              style={{ marginRight: "5px" }}
              icon={faSquareXTwitter}
            />
            {isMobile ? null : "20.5M"}
          </button>
          <button className="massenger-btn">
            <FontAwesomeIcon
              style={{ marginRight: "5px" }}
              icon={faFacebookMessenger}
            />
            {isMobile ? null : "12.5M"}
          </button>
          <button className="reddit-btn">
            <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faReddit} />
            {isMobile ? null : "8.5M"}
          </button>
          <button className="whatsapp-btn">
            <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faWhatsapp} />
            {isMobile ? null : "19.9M"}
          </button>
          <button className="telegram-btn">
            <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faTelegram} />
            {isMobile ? null : "23.2M"}
          </button>
        </div>
      </div>
      <div className="both-section">
        <div className="twoSides">
          <div className="twoSides-bar">
            <h3>Top movies</h3>
            <div className="twoSides-button">
              <button style={{ backgroundColor: "#7047BC" }}>Day</button>
              <button>Week</button>
              <button>Month</button>
            </div>
          </div>
          <Rightbar data={third} />
        </div>
        <div>
          <div className="recently-updated">
            <h3>Recently updated</h3>
            <div className="genre">
              <button
                style={{
                  textDecoration: clicked === "Action" ? "underline" : "none",
                }}
                onClick={() => handleClick("Action")}
              >
                Action
              </button>
              <button
                style={{
                  textDecoration: clicked === "Drama" ? "underline" : "none",
                }}
                onClick={() => handleClick("Drama")}
              >
                Drama
              </button>
              <button
                style={{
                  textDecoration: clicked === "Comedy" ? "underline" : "none",
                }}
                onClick={() => handleClick("Comedy")}
              >
                Comedy
              </button>
              <button
                style={{
                  textDecoration: clicked === "Horror" ? "underline" : "none",
                }}
                onClick={() => handleClick("Horror")}
              >
                Horror
              </button>
              <button
                style={{
                  textDecoration: clicked === "Romance" ? "underline" : "none",
                }}
                onClick={() => handleClick("Romance")}
              >
                Romance
              </button>
            </div>
          </div>
          <Recently data={filterData} default={recent} loading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default First;
