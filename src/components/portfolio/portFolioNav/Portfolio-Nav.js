import "./Portfolio-Nav.css";
import profilePic from "../../images/Profile-Pic-Resized.jpg";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GroupIcon from "@mui/icons-material/Group";
import { scrollEffect } from "../Utils/scrollEffect";
import { forwardRef } from "react";

const Nav = forwardRef((props, ref) => {
  let { landing, about, projects, skills, friends } = ref.current;
  return (
    <>
      <aside className="portfolio-nav headerColorOnDark">
        <section className="picNameLinks ">
          <img
            src={profilePic}
            alt="profile"
            className="profilePic"
            onClick={() => scrollEffect(landing)}
          />

          <div className="name">
            <strong>Charlie Fadness</strong>
          </div>

          <span className="icons mx-2">
            <a
              href="https://www.linkedin.com/in/cfadness/"
              target="_blank"
              className="iconLink"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </span>

          <span className="mx-2 icons">
            <a
              href="https://github.com/fadnesscharlie"
              target="_blank"
              className="iconLink"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          </span>
        </section>

        <ul className="portList">
          <li className="portListLi" onClick={() => scrollEffect(about)}>
            <HomeIcon fontSize="larger" /> About
          </li>
          <li className="portListLi" onClick={() => scrollEffect(projects)}>
            <WorkIcon fontSize="larger" /> Projects
          </li>
          <li className="portListLi" onClick={() => scrollEffect(skills)}>
            <SchoolIcon fontSize="larger" /> Work & Education
          </li>
          <li className="portListLi" onClick={() => scrollEffect(friends)}>
            <GroupIcon fontSize="larger" /> Friends
          </li>
          <li className="portListLi" onClick={() => window.scrollTo(0, 10000)}>
            <ConnectWithoutContactIcon fontSize="larger" /> Contact
          </li>
        </ul>
      </aside>
    </>
  );
});

export default Nav;
