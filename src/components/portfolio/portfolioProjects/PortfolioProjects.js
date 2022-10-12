import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { forwardRef } from 'react';

import LostPetProject from "./projects/LostPetProject";
import RemoteRateProject from "./projects/RemoteRateProject";

function portfolioProjects(props, ref) {
  return (
    <>
      <div className="backgroundColorPaleWhite headerColorOnLight" ref={ref}>
        <div className="projects width1000">
          <h2 className="headerTitles ">Highlighted Projects</h2>

          <hr style={{ height: "2px" }}></hr>
          <LostPetProject />

          <hr style={{ height: "2px" }}></hr>
          <RemoteRateProject />

          <hr style={{ height: "2px" }}></hr>

          <div
            className="backToTop rounded-pill borderColorBrown"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ArrowCircleUpIcon fontSize="larger" /> Back to the top
          </div>
        </div>
      </div>
    </>
  );
}

export default forwardRef(portfolioProjects)