import { Navigation } from "./NavItemsDropdown";
import { Button } from "@/components/ui/button"
import Logo from '@/app/assets/logo_sbk-removebg-preview.png'
import Image from "next/image";
import { NavSmall } from "./NavSmall";
export default function Navbar() {
  return (
    <div className="flex justify-between p-4 items-center  bg-white md:bg-[#eee]">
      <div className="flex  items-center justify-center m-4 ">
        <div className="mr-[20px] hidden md:block">
          <Image src={Logo} alt="" className="h-[10vh] w-auto" />
        </div>
        <div className="mr-[20px]  md:hidden">
          <NavSmall/>
        </div>

        <div className="hidden md:block">
          <h1>+254 793 47 47 47</h1>
          <h2>adm@smartbrainskenya.com</h2>
        </div>

        <div className="hidden md:block">
          <Navigation />
        </div>
      </div>

      <div className="flex space-x-4">
        <Button className="bg-white text-black">Join Us</Button>
        <Button className="bg-orange-600  text-white w-auto ">
          Student Section
        </Button>
      </div>
    </div>
  );
}
