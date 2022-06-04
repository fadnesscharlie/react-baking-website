import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="container-fluid pb-0 mb-0 justify-content-center text-light" >
      <footer className='footer'>
        <div className="row  justify-content-center py-5">
          <div className="col-11">
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <h3 className="text-muted mb-md-0 mb-5 bold-text h3 ">
                  Charlie Fadness, Software Developer
                </h3>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text ">
                  <b>MENU</b>
                </h6>
                <ul className="list-unstyled">
                  <li className="navListLi">
                    <Link className="navLinkFooter" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="navListLi">
                    <Link className="navLinkFooter" to="products">
                      Products
                    </Link>
                  </li>
                  <li className="navListLi">
                    <Link className="navLinkFooter" to="portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li className="navListLi">
                    <Link className="navLinkFooter" to="about">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                  <b>LOCATION</b>
                </h6>
                <p className="mb-1 footerFontColor">Renton, WA</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                <p className="social text-muted mb-0 pb-0 bold-text">
                  {" "}
                  <span className="mx-2">
                    <a
                      href="https://www.facebook.com/Charlies-Baked-Goods-107589064076409"
                      target="_blank"
                      className="iconLink"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </span>{" "}
                  <span className="mx-2">
                    <a
                      href="https://www.linkedin.com/in/cfadness/"
                      target="_blank"
                      className="iconLink"
                      rel="noreferrer"
                    >
                      <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                  </span>{" "}
                  <span className="mx-2">
                    <a
                      href="https://github.com/fadnesscharlie"
                      target="_blank"
                      className="iconLink"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                  </span>{" "}
                  <span className="mx-2">
                    <a
                      href="https://www.instagram.com/charliesbakedgoods/?hl=en"
                      target="_blank"
                      className="iconLink"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </span>{" "}
                </p>
                <small className="rights footerFontColor">
                  <span>&#174;</span> Charlie Fadness
                </small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                <h6 className="mt-55 mt-2 text-muted bold-text">
                  <b>Charlie Fadness, Developer</b>
                </h6>
                <small>
                  {" "}
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>{" "}
                  <a
                    className="emailLink"
                    href="mailto:fadness.charlie@outlook.com?subject=Reaching out from your Portfolio"
                  >
                    fadness.charlie@outlook.com
                  </a>{" "}
                </small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                <h6 className="text-muted bold-text">
                  <b>Charlie Fadness, Baker</b>
                </h6>
                <small>
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>{" "}
                  <a
                    className="emailLink"
                    href="mailto:fadness.charlie@gmail.com?subject=Reaching out from your Portfolio"
                  >
                    fadness.charlie@gmail.com
                  </a>{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
