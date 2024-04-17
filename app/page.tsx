import { Questions } from "@/components/Faq/Questions";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero";
import { Navigation } from "@/components/NavItemsDropdown";
import Navbar from "@/components/Navbar";
import { Main } from "@/components/Testimonials/Main";
import Why_us from "@/components/Why_us";
import Courses from "@/components/courses/courses";
import { Gallery } from "@/components/gallery/Gallery";
import VideoPlay from "@/components/video_play";
import Image from "next/image";

export default function Home() {
  return (
   <>
  <div className="bg-large">
   <Navbar/>

  <div className="w-screen">
     <Hero/>
   <VideoPlay/>
   <Courses/>
   <Gallery/>
   <Why_us/>
   <Main/>
   <Questions/>
   <Footer/>
  </div>
  </div>
   
   </>
  );
}
