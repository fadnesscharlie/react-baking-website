import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import landscapeImageWide from "../images/landscape-wide.jpg";
import Nav from "./portFolioNav/Portfolio-Nav";
import PortfolioSkills from "./portfolioSkills/portfolioSkills";
import PortfolioProject from "./portfolioProjects/PortfolioProjects";
import PortfolioAbout from "./portfolioAbout/portfolioAbout";
import "./Portfolio.css";
import PortfolioOfFriends from "./portfolioFriends/PortfolioOfFriends";

export default function portfolio(props) {
  return (
    <>
      <div className="widthMaster backgroundColorPaleWhite headerColorOnLight">
          <img src={landscapeImageWide} alt="landscape" className="landscapeImg" />
        <div className="intro ">
          <h1>Hello, I'm Charlie.</h1>
          <h3>Full Stack Software Developer </h3> 
          <h4>Aka: Optimistic Coder</h4>
          <p>
            <LocationOnOutlinedIcon /> Renton, WA
          </p>
          <div>Welcome to my developer portfolio.</div>
        </div>
      </div>
      <div className="portfolio backgroundColorPaleRed">
        <PortfolioAbout />
        <PortfolioProject />
        <PortfolioSkills />
        <PortfolioOfFriends />
      </div>

      <Nav />
    </>    
  );
}
