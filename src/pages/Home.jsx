import React from "react";
import Banner from "../component/Banner";
import InstrumentCards from "../component/InstrumentCards";
import MusicWorkshopSection from "../component/MusicWorkshopSection";
import LessonsSection from "../component/LessonsSection";
// import QuizSection from "../component/QuizSection";
import LearnMusicSection from "../component/LearnMusicSection";



function Home() {
  return (
    <>
      <Banner />
      <InstrumentCards/>
      <MusicWorkshopSection/>
       <LearnMusicSection/>
      {/* <QuizSection/> */}
      <LessonsSection/> 
     
    </>
  );
}

export default Home;
