import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import landscapeImage from "../images/landscape-final.jpg";
import Nav from "./Portfolio-Nav";
import "./Portfolio.css";
import { Link } from "react-router-dom";

export default function portfolio(props) {
  return (
    <>
      <img src={landscapeImage} alt="landscape" className="landscapeImg" />
      <div className="intro">
        <h1>Hello, I'm Charlie.</h1>
        <h3>Full Stack Developer</h3>
        <h4>Aka: Optimistic Coder</h4>
        <p>
          <LocationOnOutlinedIcon /> Renton, WA
        </p>
        <div>Welcome to my developer portfolio.</div>
      </div>
      <div className="portfolio">
        <div className="about">
          <h2>About the Optimistic Coder</h2>
          <p>
            As for being a person who inspires other with optimism, I look
            forward to being the best we can be. A strive for excellence,
            solving complex problems, engaging with people, understanding the
            conflicts we have, and finding solutions to answer them or find a
            way around them.
          </p>

          <p>
            I choose software development as a career choice to be able to
            create, solve, build, and fix things. In my process in software
            developing, I found out I started to love what developing was. The
            grind to solve a complex problem, take endless steps towards
            something just to find out it wasn't what you were looking for, and
            then... reaching your goal and finding the answer is what makes it
            all worth it.
          </p>
        </div>

        <div className="projects">
          <h2>Highlighted Projects</h2>

          <h3>Floof Finders</h3>
          <section>Floof Finders</section>

          <h3>Remote Rate</h3>
          <section>Remote Rate</section>
        </div>
      </div>

      <Nav />
    </>
  );
}
