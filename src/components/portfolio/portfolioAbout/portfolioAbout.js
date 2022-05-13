import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function portfolioAbout(props) {
  return(
    
    <>
      <div className="about width1000 headerColorOnDark">
          <h2 className='headerTitles'>About the Optimistic Coder</h2>
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
        <div className="backToTop borderColorWhite rounded-pill" onClick={() => window.scrollTo(0, 0)}>
        <ArrowCircleUpIcon fontSize="larger" /> Back to the top
      </div>
        </div>
    </>
  )
}

