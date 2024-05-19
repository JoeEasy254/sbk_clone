"use client"
import { Questions } from "@/components/Faq/Questions";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Main } from "@/components/Testimonials/Main";
import Why_us from "@/components/Why_us";
import Courses from "@/components/courses/courses";
import { Gallery } from "@/components/gallery/Gallery";
import VideoPlay from "@/components/video_play";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  return (
    <>
      <div className="z-[9999]">
        <FloatingWhatsApp
          avatar={"logo.png"}
          accountName="SmartbrainsKenya"
          onClick={function noRefCheck() {}}
          onClose={function noRefCheck() {}}
          onLoopDone={function noRefCheck() {}}
          onNotification={function noRefCheck() {}}
          onSubmit={function noRefCheck() {}}
          phoneNumber="0759689541"
        />
      </div>
      <div className="bg-large">
        <Navbar />

        <div className="w-screen">
          <Hero />
          <VideoPlay />
          <Courses />
          <Gallery />
          <Why_us />
          <Main />
          <Questions />
          <Footer />
        </div>
      </div>
    </>
  );
}
