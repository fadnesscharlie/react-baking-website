import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function portfolioProjects(props) {
  return (
    <>
      <div className="widthMaster">
        <div className="projects">
          <h2>Highlighted Projects</h2>

          <h3>Floof Finders</h3>
          <section>Floof Finders</section>
          <img
            src="https://via.placeholder.com/450"
            alt="Dev"
            className="projectImg"
          />
          <img
            src="https://via.placeholder.com/450"
            alt="Dev"
            className="projectImg"
          />
          <h3>Remote Rate</h3>
          <section>Remote Rate</section>
          <img
            src="https://via.placeholder.com/450"
            alt="Dev"
            className="projectImg"
          />
          <img
            src="https://via.placeholder.com/450"
            alt="Dev"
            className="projectImg"
          />
        </div>
        <div className="backToTop" onClick={() => window.scrollTo(0, 0)}>
          <ArrowCircleUpIcon fontSize="larger" /> Back to the top
        </div>
      </div>
    </>
  );
}
