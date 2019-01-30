import React from "react";

import { Flex, Box } from "../components";

class Home extends React.Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", this.getWidth);
  }

  getWidth = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <h2>
              Hi, I’m Matt! I am a Fullstack Engineer with a keen eye for design
              and a knack for creativity. I used to be a professional musician
              but realized that I really loved taking on the daily challenges
              that coding presents.{" "}
            </h2>
          </div>
          <div>
            <h2>
              As a musician, I learned that creating something shouldn’t be
              hindered by what you have to work with. I embrace the tools at
              hand and work to design and build something beautiful. I work in
              Node, Express, GraphQl, AWS, Postgres, React, React-Native,
              mocha.js, chai.js, plain old JavaScript & CSS. (The list continues
              to grow.) I’m also a songwriter and music theory nerd. (Guitar &
              pedal steel if you're interested.)
            </h2>
          </div>
          <div>
            <h2>
              My main motivation is to build things people love. Gluing together
              creativity and resourcefulness to make something truly useful.
            </h2>
          </div>
          <div>
            <h2>
              I'd love to hear from you! Send me an{" "}
              <a href="mailto:ehlinger.matt@gmail.com">email</a> and lets chat.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
