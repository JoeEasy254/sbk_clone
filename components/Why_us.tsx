"use client"


import ChildImg from '@/app/assets/child.jpg'
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";




export default function Why_us() {
    return (
      <>
      <div className="hidden md:block mx-auto w-[950px] mb-[40px]">
        <div>
          <h1 className="text-center font-bold my-3 text-3xl mt-[50px] mb-[20px]">
            Why Parents and Schools Choose Our Coding Program in Kenya
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
              <Image
                className=" rounded-md w-[100vw] h-[70vh] "
                src={ChildImg}
                alt=""
              />

              <div className="p-5">
                <h1 className="text-center font-semibold">
                  Individualized Progress Tracking
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
              <Image
                className=" rounded-md w-[100vw] h-[70vh] "
                src={ChildImg}
                alt=""
              />

              <div className="p-5">
                <h1 className="text-center font-semibold">
                  Professional Instructors
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
              <Image
                className=" rounded-md w-[100vw] h-[70vh] "
                src={ChildImg}
                alt=""
              />

              <div className="p-5">
                <h1 className="text-center font-semibold">
                  Interactive Learning Materials
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center  my-[50px]">
          <Button className="bg-orange-600 w-[10rem] h-[8vh] text-white">
            Browse More
          </Button>
        </div>
      </div>





        {/* swipper on mobile */}

        <div className='md:hidden mx-4'>
          <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
     <div>
              <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                <Image
                  className=" rounded-md "
                  src={ChildImg}
                  alt=""
                />

                <div className="p-5">
                  <h1 className="text-center font-semibold">
                    Individualized Progress Tracking
                  </h1>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
         <div>
              <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                <Image
                  className=" rounded-md "
                  src={ChildImg}
                  alt=""
                />

                <div className="p-5">
                  <h1 className="text-center font-semibold">
                    Professional Instructors
                  </h1>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
    
            <div>
              <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                <Image
                  className=" rounded-md "
                  src={ChildImg}
                  alt=""
                />

                <div className="p-5">
                  <h1 className="text-center font-semibold">
                    Interactive Learning Materials
                  </h1>
                </div>
              </div>
            </div>
        </SwiperSlide>
      
      </Swiper>
      </div>


      </>
    );
}
