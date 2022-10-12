import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { forwardRef } from "react";

// export default function portfolioAbout(props, {ref}) {
const portfolioAbout = forwardRef((props, ref) => {
  return (
    <>
      <div
        className="about width1000 headerColorOnDark"
        ref={ref}
        id="about"
      >
        <h2 className="headerTitles">About the Optimistic Coder</h2>
        <p>
          As for being a person who inspires other with optimism, I look forward
          to being the best we can be. What we give out to the world should be
          what we want to recieve back.
          <br />
          {/* My passion for helping, teaching, and being a person people look towards are things I strive for.

            I strive for excellence,
            solving complex problems, engaging with others,  */}
        </p>

        <p>
          Mu current specialty is with React. As a React developer, I chose
          software development as a career choice to be able to create, solve,
          build, and fix things. In my process in software developing, I found
          out I started to love what developing was. The grind to solve a
          complex problem, take endless steps towards something just to find out
          it wasn't what you were looking for, and then reaching your goal and
          finding the answer is what makes it all worth it.
        </p>
        <div
          className="backToTop borderColorWhite rounded-pill"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ArrowCircleUpIcon fontSize="larger" /> Back to the top
        </div>
      </div>
    </>
  );
});

export default portfolioAbout;
