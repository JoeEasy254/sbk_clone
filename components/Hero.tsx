import Image from "next/image";
import KidsImage from "../app/assets/kids.jpg";
import Kpsa from "../app/assets/kpsa.png";
import Mastercard from "../app/assets/mastercard-logo.jpeg";
import { Button } from "./ui/button";
import { Counter } from "./Counter";
export default function Hero() {
  return (
    <div className="flex justify-between mx-auto  items-center md:w-[1110px] mt-[40px] p-3 md:p-0">
      <div className="flex flex-col space-y-6">
        <h1 className="font-bold text-3xl w-[50vw]">
          Coding in Kenyan Schools
        </h1>
        <p>We empower schools to teach Computer Science</p>

        <div className="flex justify-between items-center ">
          <div>
            <h1>Taught in</h1>
            <h1 className="text-purple-800 font-bold text-3xl">
              <Counter/>
            </h1>
            <h1>Schools</h1>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div>
              <h1>In partnership with</h1>
            </div>

            <div className="flex justify-between items-center md:w-[100px]">
              <Image className="img-sponsor" src={Kpsa} alt="" />

              <Image className="img-sponsor" src={Mastercard} alt="" />
            </div>
          </div>
        </div>
        <div className="md:w-[400px] ">
          <Button className="bg-orange-600 text-white flex space-x-[60px]">
            <span>Join Us</span> <span> {">"} </span>{" "}
          </Button>
        </div>
      </div>

      <div className="hidden md:block">
        <Image src={KidsImage} alt="" />
      </div>
    </div>




  );
}
