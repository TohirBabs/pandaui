import Button from "./Button"
import Link from "./Link"
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
    return (
 <div className=" relative lg:p-5 p-1 mx-auto font-dm py-10">
    <div className="flex flex-col lg:gap-4 gap-2 lg:grid-cols-12 lg:grid ">
      <div className="bg-black lg:col-span-4 text-white rounded-[2.5rem] flex flex-col justify-between gap-5 p-6 lg:p-8 ">
        <p className="text-3xl font-bold">
          crafting unique user interfaces for the web
        </p>
        <p className="">
          Join our community of 2000+ passionate cultivators, innovators,
          stewards of excellence, where dedication to innovation, creativity
          and sustainable farming practices flourishes.
        </p>
            <Button icon={<MdArrowOutward/>}>shop now</Button>
          
      </div>
      <div className="lg:col-span-8 bg-[#d9d9d9]  rounded-[2.5rem] lg:p-8 p-6 pb-2">
        <div className="flex flex-col-reverse lg:flex-row  lg:gap-20 gap-5">
        <div className="flex  lg:gap-20 justify-between gap-2">
        <div className="flex flex-col gap-4">
        <p className="text-lg capitalize">links</p>
          <div className="flex flex-col gap-2 text-[#0e0e0e]/80">
            {["explore","services","individuals","businesses","blogs"].map((link, index)=> 
            <Link key={index} href="/" variant="underline">{link}</Link>)}
           
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg capitalize">communities</p>
          <div className="flex flex-col gap-2 text-[#0e0e0e]/80">
          {["twitter","facebook","instagram","whatsapp"].map((link, index)=> 
            <Link key={index} href="/" variant="">{link}</Link>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
        <p className="text-lg capitalize">support</p>
        <div className="flex flex-col gap-2 text-[#0e0e0e]/80">
          {["FAQs","contact","help center"].map((link, index)=> 
            <Link key={index} href="/" variant="underline">{link}</Link>)}
          </div>
         
        </div></div>
        <div className="flex flex-1 lg:justify-end  gap-2 h-max items-center">
        <img src="pandaemoji.svg" className="lg:h-[60px] h-[40px]"/>
         <img src="panda.svg" className="lg:h-[60px] h-[40px]"/>
          
        </div>
        </div>
        <div className="flex justify-between py-6 col-span-7 items-center ">
      <p>&copy;2024 uipanda</p>
      <div className="flex items-center gap-2">
        <a href="/">privacy policy</a>
        <div className="w-2 h-2 rounded-full bg-[#0e0e0e]"></div>
        <a href="/">terms of use</a>
      </div>
    </div>
       
      </div>
    </div>
  
  </div>)
}

export default Footer