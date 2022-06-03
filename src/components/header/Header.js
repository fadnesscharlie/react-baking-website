import "./Header.css";
import { Link } from "react-router-dom";
// import profileIcon from "../images/Profile-Pic-Resized.jpg";

export default function Header(props) {
  return (
    <header>
      {/* <Link to="/">
        <img className="icon" src={profileIcon} alt="Site Icon" />
      </Link> */}



      <nav>
        <ul>
          <span className="navListLi">
            <Link className="navLinkHeader" to="/">
              Home
            </Link>
          </span>
          <span className="navListLi">
            <Link className="navLinkHeader" to="products">
              Products
            </Link>
          </span>
          <span className="navListLi">
            <Link className="navLinkHeader" to="portfolio">
              Portfolio
            </Link>
          </span>
          <span className="navListLi">
            <Link className="navLinkHeader" to="about">
              About
            </Link>
          </span>
        </ul>
      </nav>
    </header>
  );
}
