import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import landscapeImage from "../images/landscape-final.jpg";
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
      <div className="widthMaster">
        {/* <div className="landscapeImgBox"> */}
          <img src={landscapeImageWide} alt="landscape" className="landscapeImg" />
        {/* </div> */}
        <div className="intro ">
          <h1>Hello, I'm Charlie.</h1>
          <h3>Full Stack Developer</h3>
          <h4>Aka: Optimistic Coder</h4>
          <p>
            <LocationOnOutlinedIcon /> Renton, WA
          </p>
          <div>Welcome to my developer portfolio.</div>
        </div>
      </div>
      <div className="portfolio">
        <PortfolioAbout />
        <PortfolioProject />
        <PortfolioSkills />
        <PortfolioOfFriends />
      </div>

      <Nav />
    </>
    
  );
}
