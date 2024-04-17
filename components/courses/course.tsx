"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";


interface Course {
  id: string;
  name: string;
  source: string;
  description: string;
}

export default function Course({ course }: { course: Course }) {
  return (
    <div className="max-w-sm bg-[#f4f4f4] border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
      <div className="html-bg h-[20vh] relative flex justify-center mb-3">
        <div className="border-2 border-white top-[4vh] h-24 w-24 absolute bottom-0 rounded-full">
          <Image
            src={course.source}
            alt={course.name}
            width={96}
            height={96}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            {course.name}
          </h5>
        </Link>
        <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">
          {course.description}
        </p>
        <Button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
