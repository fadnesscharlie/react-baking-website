import { lostPetData } from "../projectDB/floofFindersDB";
import CarouselDB from "../PortfolioProjectsCarousel";

export default function LostPetProject(props) {
  return (
    <>
      <h1>Floof Finders</h1>
      <section className="textLarger">
        As we know, once our pet's gets outside, we have to urgently and get them to safety. The sounds, lights, and
        enviornments will terrify them into running and hiding. When that
        happens, its too late. They are lost. <br />
        <br />
        We wanted to create an application that can you can communicate with
        others, and in the future instantly alert everyone that has the
        application within a few mile radius to quickly locate your pet's in
        those very small minutes that we have.
      </section>

      <CarouselDB data={lostPetData} />

      <section className="row">
        <h3>Why do you want this?</h3>
        <ul className="col projectBullet">
          <li className="textLarger">What does this do?</li>
          <li>Communication</li>
          <li>Interactive Map</li>
          <li>Time Stamps</li>
          <li>User/Pet Profile</li>
        </ul>
        <ul className="col projectBullet">
          <li className="textLarger">What does this Solve?</li>
          <li>Swift Location of Pets</li>
          <li>Post within seconds</li>
          <li>No need to print flyers</li>
          <li>Direction that pet is headed</li>
        </ul>
      </section>

      <br />

      <h3>Goals for this application</h3>
      <section className="stretchGoals textLarger">
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
      </section>

      <section className="row">
        <span className="col">
          <a
            href="https://lost-pet-app.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Try Out Lost Pet Finder here!
          </a>
        </span>
        <span className="col">
          <a
            href="https://github.com/Floof-Finders"
            rel="noreferrer"
            target="_blank"
          >
            Lost pet Finder Github
          </a>
        </span>
      </section>
    </>
  );
}
