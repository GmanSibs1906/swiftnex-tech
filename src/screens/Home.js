import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import About from "../components/About";
import Services from "../components/Services";
import Banner from "../components/Banner";
import ServiceList from "../components/ServiceList";
import ContactUs from "../components/ContactUs";

function Home() {
  return (
   <div>
    <VideoPlayer />
    <About />
    <Services />
    <Banner />
    <ServiceList />
    <ContactUs />
   </div>
  );
}

export default Home;
