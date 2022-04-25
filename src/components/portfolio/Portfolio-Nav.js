import "./Portfolio-Nav.css";
import profilePic from "../images/Profile-Pic-Resized.jpg";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function Nav(props) {
  return (
    <>
      <aside className="portfolio-nav">
        <section className="picNameLinks">
          <img src={profilePic} alt="profile picture" className="profilePic" />

          <div className="name">
            <strong>Charlie Fadness</strong>
          </div>

          <span className="icons mx-2">
            <a
              href="https://www.linkedin.com/in/cfadness/"
              target="_blank"
              className="iconLink"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </span>

          <span className="mx-2 icons">
            <a
              href="https://github.com/fadnesscharlie"
              target="_blank"
              className="iconLink"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          </span>
        </section>

        <ul className="portList">
          <li className="portListLi" onClick={() => window.scrollTo(0, 0)}>
            <HomeIcon fontSize='larger' />{" "}
            About
          </li>
          <li className="portListLi" onClick={() => window.scrollTo(0, 260)}>
            < WorkIcon fontSize='larger' />{" "}
            Projects
          </li>
          <li className="portListLi" onClick={() => window.scrollTo(0, 460)}>
            <SchoolIcon fontSize='larger' />{" "}
            Work & Education
          </li>
          <li className="portListLi" onClick={() => window.scrollTo(0, 10000)}>
          <ConnectWithoutContactIcon fontSize='larger' />{" "}
            Contact
          </li>
          <li className="portListLi" onClick={() => window.scrollTo(0, 0)}>
          <ArrowCircleUpIcon fontSize='larger' />{" "}
            Back to the top
          </li>
        </ul>
      </aside>
    </>
  );
}
