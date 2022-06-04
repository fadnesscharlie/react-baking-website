import CarouselDB from "../PortfolioProjectsCarousel";
import { remoteRateData } from "../projectDB/remoteRateDB";

export default function RemoteRateProject(props) {
  return (
    <>
      <h1>Remote Rate</h1>
      <section className="textLarger">
        With working from home growing more and more. We have seen the amount of time we spend getting ready, driving, and decompressing from work. 
        We say time is money, and if we were "paid" for our extra time going to work, how much would that be? If we took our hourly rate, multiplied by the hours spent driving, how much would that cost? <br />
        <br />
        We wanted to create an application that can compare offers and can tell us the amount of time we are spending
        day to day driving. Bringing the lost pay we dont get for driving, on top of gas. We wanted to bring those numbers to light so when you compare your offers, does that on-site really pay more than if you could work from home?
      </section>

        <br />
      <CarouselDB data={remoteRateData} />

      <section className="row">
        <h3>Why do you want this?</h3>
        <ul className="col projectBullet">
          <li className="textLarger">What does this do?</li>
          <li>Annual gas commute price</li>
          <li>Salary comparison</li>
          <li>Annual driving time to and from work</li>
        </ul>
        <ul className="col projectBullet">
          <li className="textLarger">What does this Solve?</li>
          <li>Compare multiple offers</li>
          <li>Dedicated page for offers</li>
          <li>How much time lost to driving</li>
        </ul>
      </section>

      <br />

      <h3>Goals for this application</h3>
      <section className="stretchGoals textLarger">
        <ul>
          <li>Mobile Application</li>
          <li>Accurate time with including traffic</li>
          <li>Load types of cars based on different MPG</li>
          <li>Local Gas API</li>
          <li>Add Price of Annual Parking Cost</li>
        </ul>
      </section>

      <section>
      <section className="row">
        <span className="col">
          <a
            href="https://remote-rate.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Try Out Remote Rate here!
          </a>
        </span>
        <span className="col">
          <a
            href="https://github.com/remote-rate-revised"
            rel="noreferrer"
            target="_blank"
          >
            Remote Rate Github
          </a>
        </span>
      </section>
      </section>
    </>
  );
}
