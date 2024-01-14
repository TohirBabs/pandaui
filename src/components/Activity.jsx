import { MdArrowForward } from "react-icons/md";
import { BsArrowUpCircle } from "react-icons/bs";
import { SlGraph, SlPlus } from "react-icons/sl";
const Activity = () => {
    return(
        <div className="font-poppins flex flex-col gap-10 m-4 bg-[#0e0e0e] rounded-3xl text-white p-5 w-max">
            <div className="flex justify-between items-center">
                <p className="capitalize text-3xl">activity</p>
                <div className="p-3 bg-[#d9d9d9]/50 rounded-full">
                    <MdArrowForward/>
                </div>
            </div>
            <div className="flex gap-8">
<div className="">
    <p className="text-3xl"><BsArrowUpCircle className="inline-block mr-1"/>37<span className="text-lg opacity-80">%</span></p>
    <p className="opacity-50 text-sm py-1">vs yesterday</p>
</div>
<div className="">
    <p className="text-3xl"><SlPlus className="inline-block mr-1"/>935<span className="text-lg opacity-80">kcal</span></p>
    <p className="opacity-50 text-sm py-1">total burned</p>
</div><div className="">
    <p className="text-3xl"><SlGraph className="inline-block mr-1"/>327<span className="text-lg opacity-80">kcal</span></p>
    <p className="opacity-50 text-sm py-1">daily avg.</p>
</div>

            </div>

            <div className="flex justify-around ">
                <div className="w-4 h-[150px] bg-[#d9d9d9]/50 rounded-full relative">
                    <div className="w-full h-[60%] bg-[#fff] rounded-full absolute bottom-0"></div>
                </div>
                <div className="w-4 h-[150px] bg-[#d9d9d9]/50 rounded-full relative">
                    <div className="w-full h-[60%] bg-[#fff] rounded-full absolute bottom-0"></div>
                </div> <div className="w-4 h-[150px] bg-[#d9d9d9]/50 rounded-full relative">
                    <div className="w-full h-[40%] bg-[#fff] rounded-full absolute bottom-0"></div>
                </div> <div className="w-4 h-[150px] bg-[#d9d9d9]/50 rounded-full relative">
                    <div className="w-full h-[80%] bg-[#fff] rounded-full absolute bottom-0"></div>
                </div> <div className="w-4 h-[150px] bg-[#d9d9d9]/50 rounded-full relative">
                    <div className="w-full h-[90%] bg-[#fff] rounded-full absolute bottom-0"></div>
                </div> <div className="w-4 h-[150px] bg-[#d9d9d9]/50 rounded-full relative">
                    <div className="w-full h-[50%] bg-[#fff] rounded-full absolute bottom-0"></div>
                </div> <div className="w-4 h-[150px] bg-[#d9d9d9]/50 rounded-full relative">
                    <div className="w-full h-[40%] bg-[#fff] rounded-full absolute bottom-0"></div>
                </div>
            </div>
            <div className="relative w-full h-3 rounded-full bg-[#d9d9d9]/20">
                <div className="absolute bg-[#fff] w-[30%] rounded-full h-full left-0"></div>
            </div>
            <div className="flex gap-8">
<div className="">
    <p className="text-3xl"><BsArrowUpCircle className="inline-block mr-1"/>37<span className="text-lg opacity-80">%</span></p>
    <p className="opacity-50 text-sm py-1">vs yesterday</p>
</div>
<div className="">
    <p className="text-3xl"><SlPlus className="inline-block mr-1"/>935<span className="text-lg opacity-80">kcal</span></p>
    <p className="opacity-50 text-sm py-1">total burned</p>
</div><div className="">
    <p className="text-3xl"><SlGraph className="inline-block mr-1"/>327<span className="text-lg opacity-80">kcal</span></p>
    <p className="opacity-50 text-sm py-1">daily avg.</p>
</div>

            </div>
        </div>
    )
}

export default Activity