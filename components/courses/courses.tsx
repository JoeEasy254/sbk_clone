"use client"

import { Button } from "../ui/button";
import Course from "./course";
import HtmlLogo from '../../app/assets/html.jpg'
import cssLogo from "../../app/assets/css.jpg";
import androidLogo from "../../app/assets/android.jpg";
import roboticsLogo from "../../app/assets/robotics.jpg";
import scratchLogo from "../../app/assets/scratch.jpg";
import pythonLogo from "../../app/assets/python.jpg";
import GameDev from '../../app/assets/gamedev.jpg'
import javascriptLogo  from '../../app/assets/javascript.jpg'
import { useState } from "react";

interface Course {
  id:string,
  name:string,
  source:any,
  description:string
}

export default function Courses() {



  const [courses, setCources] = useState<Course[]>([
    {
      id: "1",
      name: "html",
      source:
        "https://www.smartbrainskenya.com/_next/image?url=%2Fhtml1.png&w=256&q=75",
      description: "Learn to make websites",
    },
    {
      id: "2",
      name: "CSS",
      source:
        "https://www.smartbrainskenya.com/_next/image?url=%2Fcss1.jpeg&w=256&q=75",
      description: "Explore web design",
    },
    {
      id: "3",
      name: "Android Development",
      source:
        "https://www.smartbrainskenya.com/_next/image?url=%2Fandroid1.jpeg&w=256&q=75",
      description: "Build mobile apps",
    },
    {
      id: "4",
      name: "Robotics",
      source:
        "https://www.smartbrainskenya.com/_next/image?url=%2Frobotics.jpeg&w=256&q=75",
      description: "Design and build robots",
    },

    {
      id: "5",
      name: "Scratch Programming",
      source:
        "https://www.smartbrainskenya.com/_next/image?url=%2Fscratch.png&w=256&q=75",
      description: "Introduction to programming",
    },
    {
      id: "6",
      name: "Python for Kids",
      source:
        "https://www.smartbrainskenya.com/_next/image?url=%2Fpython.png&w=256&q=75",
      description: "Introduction to Python programming",
    },
  
    {
      id: "7",
      name: "JavaScript",
      source:"https://www.smartbrainskenya.com/_next/image?url=%2Fjavascript.png&w=256&q=75",
      description: "Learn JavaScript programming",
    },
    {
      id: "8",
      name: "Game Development",
      source:"https://www.smartbrainskenya.com/_next/image?url=%2Fgamedev.jpg&w=256&q=75",
      description: "Create games with game development tools",
    },
  ]);



  return (
    <div>
      <div className="mt-4 hidden md:block">
        <h1 className="text-center mb-3 font-bold text-3xl">Our Courses</h1>

        <div className="grid gap-10 grid-cols-3 mx-auto w-[900px] my-2">
          {courses.map((course) => (
            <Course course={course} />
          ))}
        </div>

        <div className="flex justify-center  my-[50px]">
          <Button className="bg-orange-600 w-[10rem] h-[8vh] text-white">
            Join Us
          </Button>
        </div>
      </div>
    </div>
  );
}
