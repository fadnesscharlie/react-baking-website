import "./Baking.css";
import firstCatCake from "../../productImages/FirstCatCake.jpg";
import UbeCustardItalian from "../../productImages/UbeCustardItalian.jpg";
import KimBirthday2022Closeup from "../../productImages/KimBirthday2022Closeup.jpg";
import KimBirthday2022Topview from "../../productImages/KimBirthday2022Topview.jpg";

export default function Baking(props) {
  return (
    <>
      <div className="mainComponentBody"></div>
      <div className="backgroundMain">
        <h1 className='bakingTitle'>
          <strong>Charlie the Baker.</strong>
        </h1>
        <br />
        <br />
        <div className="bakerInfo wordText">
          <p className="wordText">
            <strong className="startTag">Hello! My name is Charlie!</strong>{" "}
            Welcome to my humble beginning and I thank you for taking the time
            to visit!
            <br />
            <br />
            The story of a massage therapist that turned to software
            development. Here you will find my Developer Portfolio, images of
            everything baked, and my story.
          </p>
          <img
            src={firstCatCake}
            alt="First Cake Cake"
            className="firstCatCake picBorder"
          />
          <strong className="startTag">The Beginning</strong> My passion for all
          my careers came with one goal: helping. From helping people on a daily
          basis, to feeding the bellies of my friends and family, I was always
          inspired to help. My baking passion started with brownies in high
          school, the oh so good fudgy chocolate with that delicious crunch of
          walnuts in the middle. My hobby of baking started in 2017 when I first
          tried to make my first custom cake. We always start somewhere, and
          this is my start, the process of making a "cat" cake, but turned more
          into a wolf cake. The process was super fun, and I knew how I could
          improve.
          <br />
          Fun fact: The ears stayed in place with toothpicks, although the
          toothpicks did not last long, and we had to sing happy birthday just a
          little bit faster.
          <br />
          <br />
          <img
            src={UbeCustardItalian}
            alt="UbeCustardItalian"
            className="ubeCake picBorder"
          />
          <strong className="startTag">The Takeoff</strong> In 2019 I sold my
          first cake, I was so ecstatic. It was to a friend, and I told them to
          challenge me. And oh did they! They went all out with an Ube Cake with
          Custard filling and Italian Meringue Buttercream.
          <br />
          <br />
          <strong className="startTag">The Wait</strong> From there I sold a few
          more cakes until Covid hit. A took a break from making cakes and in
          2021 I wanted to find my next challenge and career. From my challenges
          in baking, I wanted to find a new passion that incorporated the
          challenge that baking provided me and more. What better a career then
          having a challenge every day with a new task to solve and having to
          constantly improvise to solve the days task.
          {/* Carrer that allowed me to "problem solve" more*/}
          From finishing my Coding BootCamp in 2022, I finally found my calling,
          it was as challenging as I thought it would be with all the excitement
          and knowledge that awaited.
          <br />
          <br />
          <img
            src={KimBirthday2022Topview}
            alt="KimBirthday2022Topview"
            className="kimBirthdayCake picBorder"
          />
          <img
            src={KimBirthday2022Closeup}
            alt="KimBirthday2022Closeup"
            className="kimBirthdayCake picBorder"
          />
          <strong className="startTag">The Real Challenge</strong> My latest
          creation was all of my efforts combined into one. And I got to
          celebrate my little sister's 18th Birthday! Starting with a Chocolate
          Cake with Homemade Raspberry Filling and Swiss Meringue Buttercream
          with a frog theme! I created a frog theme involving frogs garthering
          around feeding fish by a pond.
          {/* <br /> */}
          <br />
          <strong className="startTag">The Goal </strong>From my experience
          through baking, problem solving, thinking logically, and the
          challenges from programming, I am now able to add those two together
          to bring my career forward to explore and venture the world of new
          beginnings and endless problems to solve. The best of all, with a
          lovely baked goods by my side!
        </div>
      </div>
    </>
  );
}
