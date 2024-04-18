"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ChildImg from "@/app/assets/child.jpg";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import User from "./User";
import { useState } from "react";

export const Main = () => {
  // const [testimonials,setTestimonials] = useState([
  //   {
  //     id:"1",
  //     name:"Sandra Ochieng",
  //     role:"Edicator",
  //     say:"Essential for equipping kids"
  //   }
  // ])
  return (
    <>
      <div className="hidden md:block mx-auto md:w-[950px] mb-[40px]">
        <div>
          <h1 className="text-center font-bold my-3 text-3xl mt-[50px]">
            What Our Customers Say
          </h1>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
         
        >
          <SwiperSlide>
            <User />
          </SwiperSlide>
          <SwiperSlide>
            <User />
          </SwiperSlide>
          <SwiperSlide>
            <User />
          </SwiperSlide>
          <SwiperSlide>
            <User />
          </SwiperSlide>
          <SwiperSlide>
            <User />
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center  my-[50px]">
          <Button className="bg-orange-600 w-[10rem] h-[8vh] text-white">
            Join Us
          </Button>
        </div>
      </div>

      {/* mobile view */}

      <div className="md:hidden mx-4 md:mx-auto md:w-[950px] mb-[40px]">
        <div>
          <h1 className="text-center font-bold my-3 text-3xl mt-[50px]">
            What Our Customers Say
          </h1>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
     
        >
          <SwiperSlide className="flex justify-center">
            <User />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <User />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <User />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <User />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <User />
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center  my-[50px]">
          <Button className="bg-orange-600 w-[10rem] h-[8vh] text-white">
            Join Us
          </Button>
        </div>
      </div>
    </>
  );
};
