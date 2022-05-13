import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import LostPetAppFound from "../../images/projects/lostPetApp/LostPetAppFound.PNG";
import LostPetAppBoard from "../../images/projects/lostPetApp/LostPetAppBoard.PNG";
import LostPetAppPets from "../../images/projects/lostPetApp/LostPetAppPets.PNG";

// /home/fadnesscharlie/coding/baking/react-baking-website/src/components/images/projects/lostPetApp/LostPetAppFound.PNG
export default function portfolioProjects(props) {
  return (
    <>
      <div className="backgroundColorPaleWhite headerColorOnLight">
        <div className="projects width1000">
          <h2 className="headerTitles ">Highlighted Projects</h2>

          <h3>Floof Finders</h3>
          <section className="textLarger">
            As we know, once our pet gets outside, we have to in the first few
            minutes find our pet and get them to safety. The sounds, lights, and
            enviornment will terrify them into running and hiding and when that
            happens, its to late. They are lost. <br />
            <br />
            We wanted to create an application that can you can communicate with
            others, and in the future instantly alert everyone that has the
            application within a few miles radius to quickly locate your pet in
            those very small minutes that we have.
          </section>
          <img
            src={LostPetAppBoard}
            alt="LostPetAppBoard"
            className="projectImgBoard projectImg"
          />

          <p className="textLarger">
            Communicaton, interactive map, time stamps, and information designed
            to locate and find each pet
          </p>

          <img
            src={LostPetAppFound}
            alt="LostPetAppFound"
            className="projectImg width1000"
          />
          <p className="textLarger">
            Create a profile for pets to be able to post within seconds of
            losing sight of your pets. <br />
            <br />
            No rushing to pring out pages, creating a template, printing out
            hundred of pages, then putting it up all around town. Instead, click
            one button, and instantly post to a board that everyone can see in
            seconds!
          </p>

          <p className="textLarger">
            Communicate with others and being able to interact with others with
            an interactive map to display the last location of the pet along
            with a time stamp. This allows the pet owners to not only talk to
            others that have information, but to be able to see the pets
            movements in seeing where the animal is headed.
          </p>
          <br />

          <img
            src={LostPetAppPets}
            alt="LostPetAppPets"
            className="projectImg"
          />

          <h3>Goals for this application</h3>
          <p className="stretchGoals textLarger">
            <ul>
              <li>Mobile Application</li>
              <li>Geo Location for accurate location pinging</li>
              <ul>
                <li>
                  Clickable "Seen near me" to instantly add pet marker to map
                  without opening the map
                </li>
              </ul>
              <li>Modify your pet data</li>
              <li>Direct Message individual users</li>
              <li>
                Incorporating Socket.io for a better messaging platform and
                notification alerts
              </li>
            </ul>
          </p>

          <section>
            <a
              href="https://lost-pet-app.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Try Out Lost Pet Finder here!
            </a>
          </section>

          <br />

          {/* <div>
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
          </div> */}
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
