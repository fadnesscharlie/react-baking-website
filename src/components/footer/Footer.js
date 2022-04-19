import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div class="container-fluid pb-0 mb-0 justify-content-center text-light">
      <footer>
        <div class="row my-5 justify-content-center py-5">
          <div class="col-11">
            <div class="row ">
              <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <h3 class="text-muted mb-md-0 mb-5 bold-text">
                  Charlie's Baked Goods
                </h3>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 class="mb-3 mb-lg-4 bold-text ">
                  <b>MENU</b>
                </h6>
                <ul class="list-unstyled">
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
              <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                  <b>LOCATION</b>
                </h6>
                <p class="mb-1">Renton, WA</p>
              </div>
            </div>
            <div class="row ">
              <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                <p class="social text-muted mb-0 pb-0 bold-text">
                  {" "}
                  <span class="mx-2">
                    <a
                      href="https://www.facebook.com/Charlies-Baked-Goods-107589064076409"
                      target="_blank"
                      class="iconLink"
                    >
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </span>{" "}
                  <span class="mx-2">
                    <a
                      href="https://www.linkedin.com/in/cfadness/"
                      target="_blank"
                      class="iconLink"
                    >
                      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                  </span>{" "}
                  <span class="mx-2">
                    <a
                      href="https://github.com/fadnesscharlie"
                      target="_blank"
                      class="iconLink"
                    >
                      <i class="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                  </span>{" "}
                  <span class="mx-2">
                    <a
                      href="https://www.instagram.com/charliesbakedgoods/?hl=en"
                      target="_blank"
                      class="iconLink"
                    >
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </span>{" "}
                </p>
                <small class="rights">
                  <span>&#174;</span> Charlie's Baked Goods
                </small>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                <h6 class="mt-55 mt-2 text-muted bold-text">
                  <b>Charlie Fadness, Developer</b>
                </h6>
                <small>
                  {" "}
                  <span>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </span>{" "}
                  <a
                    className="emailLink"
                    href="mailto:fadness.charlie@outlook.com?subject=Reaching out from your Portfolio"
                  >
                    fadness.charlie@outlook.com
                  </a>{" "}
                </small>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                <h6 class="text-muted bold-text">
                  <b>Charlie Fadness, Baker</b>
                </h6>
                <small>
                  <span>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </span>{" "}
                  <a
                    className="emailLink"
                    href="mailto:fadness.charlie@outlook.com?subject=Reaching out from your Portfolio"
                  >
                    fadness.charlie@outlook.com
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
