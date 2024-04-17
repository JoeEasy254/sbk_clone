import { Button } from "../ui/button";
import { Facebook, Instagram, Twitter, Linkedin, PhoneCall } from "lucide-react";
export default function Footer() {
  return (
    <div className="footer mx-auto md:w-[1100px] mb-[40px] md:p-3 ">
      <div className="flex justify-center items-center flex-col gap-8">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-bold text-2xl text-center mb-4">
            Smart<span className="text-blue-700">Brains</span>
          </h1>
          <h2 className="text-center text-2xl mb-5">Have further questions?</h2>
          <p className="text-pink-700 text-center text-2xl">
            We are here to help!
          </p>
        </div>

        <div className="flex  justify-center items-center space-x-6">
          <Button  className="bg-blue-400 md:p-6 md:w-[20rem] ">
            <PhoneCall /> +254793474747
          </Button>
          <Button className="hidden bg-blue-400 md:p-6 md:w-[20rem] ">
            adm@smartbrainskenya.com
          </Button>
        </div>

        <div>
          <h1 className="text-center">Tutor Section</h1>
        </div>
      </div>

      <div className=" md:my-[40px] flex flex-col justify-center items-center font-semibold text-2xl">
        <h1 className="text-center">Follow us on</h1>

        <div className="flex space-x-1 mt-[20px]">
          <Instagram />

          <Facebook />

          <Linkedin />

          <Twitter />
        </div>
      </div>
    </div>
  );
}
