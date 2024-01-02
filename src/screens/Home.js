import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import About from "../components/About";
import Services from "../components/Services";
import Banner from "../components/Banner";
import ServiceList from "../components/ServiceList";
import ContactUs from "../components/ContactUs";
import NavBar from "../components/NavBar";

function Home() {
  return (
   <div className=" relative ">
    <NavBar className=" " />
    <VideoPlayer name="home"/>
    <About name="about"/>
    <Services name="services"/>
    <Banner />
    <ServiceList />
    <ContactUs name="contact"/>
   </div>
  );
}

export default Home;
