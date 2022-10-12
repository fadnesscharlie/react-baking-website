import { useRef } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import landscapeImageWide from "../images/landscape-wide.jpg";
import Nav from "./portFolioNav/Portfolio-Nav";
import PortfolioSkills from "./portfolioSkills/portfolioSkills";
import PortfolioProject from "./portfolioProjects/PortfolioProjects";
import PortfolioAbout from "./portfolioAbout/portfolioAbout";
import "./Portfolio.css";
import PortfolioOfFriends from "./portfolioFriends/PortfolioOfFriends";

export default function Portfolio(props) {
  const landing = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const friends = useRef(null);
  
  const ref = useRef({
    landing,
    about,
    projects,
    skills,
    friends,
  });

  return (
    <>
      <div
        className="widthMaster backgroundColorPaleWhite headerColorOnLight"
        ref={landing}
      >
        <img
          src={landscapeImageWide}
          alt="landscape"
          className="landscapeImg fullSizePage"
        />
        <div className="intro fullSizePage">
          <h1>Hello, I'm Charlie Fadness.</h1>
          <h3>Full Stack Software Developer </h3>
          <h4>Aka: Optimistic Coder</h4>
          <p>
            <LocationOnOutlinedIcon /> Renton, WA
          </p>
          <div>Welcome to my developer portfolio.</div>
        </div>
      </div>
      <div className="portfolio backgroundColorPaleRed">
        <PortfolioAbout ref={about} />
        <PortfolioProject ref={projects} />
        <PortfolioSkills ref={skills} />
        <PortfolioOfFriends ref={friends} />
      </div>

      <Nav ref={ref} />
    </>
  );
}
