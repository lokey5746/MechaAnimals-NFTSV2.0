import React from "react";
import About from "./About";
import Hero from "./Hero";
import History from "./History";
import Community from "./Community";
import Faq from "./Faq";
import Roadmap from "./RoadMap";
import Teams from "./Teams";
import Rarity from "./Rarity";
import Policy from "./Policy";
import Test from "./Test";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Policy />
      <History />
      <Rarity />
      <Roadmap />
      {/* <Faq /> */}
      <Test />
      <Teams />
      <Community />
    </>
  );
}

export default Home;
