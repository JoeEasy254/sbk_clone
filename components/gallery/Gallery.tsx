"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ChildImg from '@/app/assets/child.jpg'
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export  const Gallery =  () => {
        return (
          <>
            <div className="md:mx-auto  md:w-[950px] mb-[40px] mx-3 hidden md:block">
              <div>
                <h1 className="text-center font-bold my-3 text-3xl mt-[50px]">
                  Gallery
                </h1>
              </div>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image
                      className=" rounded-md w-[100vw] "
                      src={ChildImg}
                      alt=""
                    />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image
                      className=" rounded-md w-[100vw] "
                      src={ChildImg}
                      alt=""
                    />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image
                      className=" rounded-md w-[100vw] "
                      src={ChildImg}
                      alt=""
                    />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image
                      className=" rounded-md w-[100vw] "
                      src={ChildImg}
                      alt=""
                    />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image
                      className=" rounded-md w-[100vw] "
                      src={ChildImg}
                      alt=""
                    />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="max-w-lg  bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image
                      className=" rounded-md w-[100vw] "
                      src={ChildImg}
                      alt=""
                    />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="flex justify-center  my-[50px]">
                <Button className="bg-orange-600 w-[10rem] h-[8vh] text-white">
                  Browse More
                </Button>
              </div>
            </div>

            {/* mobile view */}

            <div className="md:mx-auto  md:w-[950px] mb-[40px] mx-3 block  md:hidden">
              <div>
                <h1 className="text-center font-bold my-3 text-3xl mt-[50px]">
                  Gallery
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
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide className="flex justify-center my-4">
                  <div className="max-w-lg  bg-[#ffff] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image className=" rounded-md " src={ChildImg} alt="" />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center my-4">
                  <div className="max-w-lg  bg-[#ffff] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image className=" rounded-md  " src={ChildImg} alt="" />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center my-4">
                  <div className="max-w-lg  bg-[#ffff] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image className=" rounded-md  " src={ChildImg} alt="" />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center my-4">
                  <div className="max-w-lg  bg-[#ffff] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image className=" rounded-md  " src={ChildImg} alt="" />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center my-4">
                  <div className="max-w-lg  bg-[#ffff] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image className=" rounded-md  " src={ChildImg} alt="" />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center my-4">
                  <div className="max-w-lg  bg-[#ffff] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <Image className=" rounded-md " src={ChildImg} alt="" />

                    <div className="p-5">
                      <h1 className="text-center font-semibold">
                        St. Bakhita school
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="flex justify-center  my-[50px]">
                <Button className="bg-orange-600 w-[10rem] h-[8vh] text-white">
                  Browse More
                </Button>
              </div>
            </div>
          </>
        );
};