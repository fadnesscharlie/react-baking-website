import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function portfolioSkills(props) {
  return (
    <>
      <section className="skills width1000 headerColorOnDark ">
        <section className="row ">

          <div className="skillsSummary col">
            <h2 className="headerTitles ">Work & Education</h2>
            <div>
              <ul>
                <li>
                  <strong className="skillTitle">Lead Massage Therapist</strong>
                </li>
                <ul>
                  <li>Good Life Massage Renton</li>
                  <li>May 2018 - July 2020</li>
                </ul>
                <li>
                  <strong className="skillTitle">Massage Therapist</strong>
                </li>
                <ul>
                  <li>Good Life Massage Renton</li>
                  <li>July 2016 - Present</li>
                </ul>

                <li>
                  <strong className="skillTitle">Massage Therapist</strong>
                </li>
                <ul>
                  <li>Massage Envy West Seattle</li>
                  <li>March 2014 - October 2019</li>
                </ul>

                {/* Line Break */}
                <hr style={{ height: "2px" }}></hr>

                <li>
                  <strong className="skillTitle">
                    Advanced Software Development in Full-Stack JavaScript
                  </strong>
                </li>
                <ul>
                  <li>Code Fellows, Seattle, WA</li>
                  <li>2021 - 2022</li>
                </ul>
              </ul>
            </div>
          </div>

          <div className="skillsSummary2 col">
            <h2 className="headerTitles headerColorOnDark">Skills Summary</h2>
            <div>
              <ul>
                <li>
                  <strong className="skillTitle">Current Stack</strong>
                </li>
                <ul>
                  <li>
                    JavaScript, AWS, Nodejs, HTML, CSS, Shell Scripting, React
                  </li>
                </ul>
                <li>
                  <strong className="skillTitle">Skills and Tools Used</strong>
                </li>
                <ul>
                  <li>
                    Visual Studio Code, Git, Github, Express, RESTful API, Jest,
                    Auth0, Heroku, Netlify, Insomnia, MongoDB, PostgreSQL,
                    Postman, Replit, Ubunto, Socket.io, AWS S3, AWS Bucket, AWS
                    EC2, AWS DynamoDB, AWS Lambda, Redux,
                  </li>
                </ul>
                <li>
                  <strong className="skillTitle">Hobbies</strong>
                </li>
                <ul>
                  <li>Python, baking website, baking, anime, games</li>
                </ul>
              </ul>
            </div>
          </div>
        </section>
        <div
          className="backToTop rounded-pill borderColorWhite"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ArrowCircleUpIcon fontSize="larger" /> Back to the top
        </div>
      </section>
    </>
  );
}
