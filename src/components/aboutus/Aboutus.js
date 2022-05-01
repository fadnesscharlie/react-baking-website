import "./Aboutus.css";
import firstCatCake from "../../productImages/FirstCatCake.jpg";
import UbeCustardItalian from "../../productImages/UbeCustardItalian.jpg";
import KimBirthday2022Closeup from "../../productImages/KimBirthday2022Closeup.jpg";
import KimBirthday2022Topview from "../../productImages/KimBirthday2022Topview.jpg";

export default function About(props) {
  return(
    <>
      <div className="mainComponentBody"></div>
      <div className="backgroundMain">
        <h1><strong>Software Developer, Massage Therapist, and Baker.</strong></h1>
        <br />
        <br />
        <p className="bakerInfo wordText">
        <p className='wordText'>
          

        <strong className='startTag'>Hello! My name is Charlie!</strong>  Welcome to my humble beginning and I thank you for taking the time to Visit!
          <br /><br />
          The story of a massage therapist's baking habits that turned to
          software development. Here you will find my Developer Portfolio,
          images of everything baked, and my story. 
        </p>

          <img
            src={firstCatCake}
            alt="First Cake Cake"
            className="firstCatCake picBorder"
          />
          <strong className='startTag'>The Beginning</strong> My passion for all my careers came with
          one goal: helping. From helping people on a daily basis, to feeding
          the bellies of my friends and family, I was always inspired to help.
          
          My baking passion started with brownies in high school and not the
          "special" ones, the oh so good fuggy chocolate with that delicious
          crunch of walnuts in the middle.
          I really started to take off in 2017 when I first tried to make
          my first custom cake. We always start somewhere, and this is my start, the process to make a "cat" cake, but turned more into a wolf cake. The process was super fun, and I knew I could improve and how.<br />Fun fact: The ears stayed in place with toothpicks, although the toothpicks did not last long, and we had to sing just a little bit faster.
          <br />
          <br />
          <img
            src={UbeCustardItalian}
            alt="UbeCustardItalian"
            className="ubeCake picBorder"
          />
          <strong className='startTag'>The Takeoff</strong> In 2019 I sold my first cake, I was so
          estatic. It was to a friend, and I told them to challenge me. And oh
          did they! They went all out with a Ube Cake with Custard filling and
          Italian Meringue Buttercream.
          <br />
          <br />
          <strong className='startTag'>The Wait</strong> From there I sold a few more cakes until
          Covid hit. A took a break from making cakes and in 2021 I wanted to find my next challenge and career. From my challenges in baking, I wanted to find a new passion that incorporated everything that baking has challenged me but more. What better a career then having a challenge every day with a new task to solve and having to constantly improvise to solve the days task. From finishing my Coding BootCamp in 2022, I finally found my calling, it was as challenging as I thought it would be with all the excitment and knowledge that awaited.
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
          <strong className='startTag'>The Real Challenge</strong> My latest creation was all of my
          efforts based in one. And I got to celebrate my little sister's 18th
          Birthday all in one! So of course, we had to supply the best! Starting
          with a Chocolate Cake with Homemade Raspberry Filling and Swiss
          Meringue Buttercream with a frog theme! 
          
          I got to make a frog theme
          along with them gathering around and feeding the fishes in the lake.
          {/* <br /> */}
          <br />

          <strong className='startTag'>The Goal </strong>From my experience through baking, problem solving, thinking logically, and the challenges from programming, I am now able to add those two together to bring my career forward to explore and venture the world of new beginnings and endless problems to solve. And of course, with a lovely baked good by my side!
        </p>
      </div>
    </>
    
  )
}
