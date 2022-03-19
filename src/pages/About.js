import './About.scss'
import { Link } from "react-router-dom";

const About = (props) => {
  const ButtonMailto = ({ mailto, label }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="aboutContainer">
      <div className="jaredAbout">
        <h1>Jared Bradley</h1>
        <h3>Front End Developer</h3>
        <img src="https://i.imgur.com/gN45uWO.jpg?1" alt="Jared" />
        <h4>
          Hello! I'm Jared and I was the Front End developer for TastyGram! The
          front end of TastyGram was created using React. I had a blast making
          this app with my teammates!
        </h4>
        <h4>Email: jaredbradley95@gmail.com</h4>
      </div>
      <div className="jamesAbout">
        <h1>James Smith</h1>
        <h3>Scrum Master/Front End Developer</h3>
        <img src="https://i.postimg.cc/gJ30Dj07/James-Photo.jpg" alt="James" />
        <h4>
          I'm James Smith, and my primary role on this project was styling using
          Sass. I also created the logic to tie posts to their users and
          assisted in setting up a few React components. If you like this site,
          take a look at my portfolio, and if you think I'd be a good fit at
          your organization, feel free to reach out. Thanks for looking, and
          have a nice day.
          <br />
          <br />
          <a href="https://nervous-varahamihira-8dc38e.netlify.app/">
            James Smith's Portfolio
          </a>
          <br />
          Email: jwsmith2340@yahoo.com
        </h4>
      </div>
      <div className="micahAbout">
        <h1>Micah Stewart</h1>
        <h3>Back End Developer</h3>
        <img src="https://i.imgur.com/iEHkoMW.jpg?2" alt="Micah" />
        <h4>
          Hey, I'm the Backend dev for "TG" :) MongoDB, Express and Node were
          utilized for this project. I was also responisble for implementing
          authentication via firebase. I learned a lot working with this team
          and im excited to continue to grow!
          <br />
          <br />
          <br />
          <br />
          <br />
          <a href="https://micahstewart.com" target="_blank">
            Check Out My Portfolio
          </a>
          <br />
          Email:
          <ButtonMailto
            label=" MicahLouís99@Gmail.com"
            mailto="mailto:micahlouis99@gmail.com"
          />
        </h4>
      </div>
    </div>
  );
};

export default About;