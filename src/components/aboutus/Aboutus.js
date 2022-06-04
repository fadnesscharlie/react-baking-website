import "./Aboutus.css";

import profilePic2 from "../images/charlie-full-resized.jpg";
import { facts } from "./FunFacts";
import RenderFacts from "./RenderFacts";

export default function About(props) {
  return (
    <>
      <p className="spaceUnderHeader"></p>
      <h1 className="mainIntro">
        <span>The Developer, Massage Therapist, and Baker</span>
      </h1>

      {/* <p className="mainIntro">
        From a LMP(License Massage Therapist), to Hobby Baker, and now
        Developing.
        <br />
      </p> */}

      <div className="row mainBody">
        <div className="mainProfilePic col">
          <img src={profilePic2} alt="profilePic" className="MainPic" />
        </div>
        <div className="col ">
          <h1 className="whoIs">Who is Charlie Fadness?</h1>
          <section className="mainDescription">
            <div className="coreValues whoIs">
              Core values:
              <br /> Helpful, Optimistic, Client Focused, Positive, Honest
              <br />
            </div>
            <section className="aboutBio">
              Everyday is what you make it out to be. I believe if you create a
              positive environment for yourself and others, there will be no bad
              day. By influencing others in a positive way, we can then be
              greeted by that positive outlook back to us. When I wake up every
              morning, I think of what the day has to offer, and what can I
              bring to others around me.
              <section className="factsSection">
                <h2>Fun Facts:</h2>
                {facts.map((el, idx) => (
                  <RenderFacts el={el} key={idx} />
                ))}
              </section>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

/* Through wanting to create more complex cakes, using that problem
          solving in making sure the measurements are accurate to get the
          perfect balance, to fixing a Dairy-free Swiss Merginue Buttercream.
          Being able to solve, debug, test - developing has been able to <br />
          As a baker, creating works of art, seeing the expression when you
          deliver that art, and them taking that first bite has been an amazing
          feeling. I started off doing simple birthday cakes to now, creating
          complex cakes that bring a story.
          
          
          <section className="mainDescription">
            Hello and Welcome! Being able to challenge myself, keep me on my
            toes with the never ending knowledge and tech, creates for such an
            exciting world! From complicated code challenges, rabbit holes,
            endless research, to the small victories. Everyday is an amazing
            day.
          </section>*/
