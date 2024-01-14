import { MdArrowForward } from "react-icons/md";
import { BsArrowUpCircle } from "react-icons/bs";
import { SlGraph, SlPlus } from "react-icons/sl";
const Activity = () => {
    return(
        <div className="font-poppins flex flex-col gap-10 m-4 bg-[#0e0e0e] rounded-[2.5rem] text-white p-5 w-max">
            <div className="flex justify-between items-center">
                <p className="capitalize text-3xl">activity</p>
                <div className="p-3 bg-[#d9d9d9]/50 rounded-full">
                    <MdArrowForward/>
                </div>
            </div>
            <div className="flex gap-8">
<div className="flex flex-col items-center">
    <p className="text-3xl"><BsArrowUpCircle className="inline-block mr-1"/>37<span className="text-lg opacity-80"> %</span></p>
    <p className="opacity-50 text-sm py-1">vs yesterday</p>
</div>
<div className="flex flex-col items-center">
    <p className="text-3xl"><SlPlus className="inline-block mr-1"/>935<span className="text-lg opacity-80"> kcal</span></p>
    <p className="opacity-50 text-sm py-1">total burned</p>
</div><div className="flex flex-col items-center">
    <p className="text-3xl"><SlGraph className="inline-block mr-1"/>327<span className="text-lg opacity-80"> kcal</span></p>
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
                <div className="absolute bg-[#fff] w-[43%] rounded-full h-full left-0"></div>
                <div className="absolute bg-[#fff]/60 w-[67%] rounded-full h-full left-0"></div>
                <div className="absolute bg-[#fff]/40 w-[89%] rounded-full h-full left-0"></div>
            </div>
            <div className="flex justify-between gap-8">
<div className="flex flex-col items-center">
    <p className="text-3xl">402<span className="text-lg opacity-80"> cal</span></p>
    <p className="text-[#d9d9d9]/60 text-sm py-1"><div className="w-2 h-2 rounded-full bg-[#fff] inline-block mr-1"></div>running . 43%</p>
</div>
<div className="flex flex-col items-center">
    <p className="text-3xl">302<span className="text-lg opacity-80"> cal</span></p>
    <p className="text-[#d9d9d9]/60 text-sm py-1"><div className="w-2 h-2 rounded-full bg-[#fff]/60 inline-block mr-1"></div>walking . 24%</p>
</div><div className="flex flex-col items-center">
    <p className="text-3xl">215<span className="text-lg opacity-80"> cal</span></p>
    <p className="text-[#d9d9d9]/60 text-sm py-1"><div className="w-2 h-2 rounded-full bg-[#fff]/40 inline-block mr-1"></div>cycling . 22%</p>
</div>

            </div>
        </div>
    )
}

export default Activity