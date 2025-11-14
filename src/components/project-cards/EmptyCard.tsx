import React from "react";
import { Pickaxe } from "lucide-react";
import placeholder from "../../../public/assets/homepage/mockup.jpg";

export default function EmptyCard() {
  return (
    <>
      <div className="border overflow-hidden relative group transition-all duration-300 ease ring-gradient !rounded-xl cursor-pointer flex flex-col dock h-fit">
        <div className="relative z-20 w-full h-full overflow-hidden group">
          <div
            className="overflow-hidden  relative transition-all duration-300 bg-dark-600 dark:bg-dark-700
                  before:content-[''] before:z-0 before:absolute before:inset-0 before:pointer-events-none
              before:bg-[linear-gradient(to_right,rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.15)_1px,transparent_1px)]
              before:[background-size:40.5px_40.5px] 
              before:[background-position:0_25px,0_25px]

              after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:-z-0
              after:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(136,136,136,0)_0%,#101010_90%)]
                  "
          >
            <img
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-0"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end justify-center gap-2 text-white-100">
              <Pickaxe className="pickaxe-anim mb-[5px]" />
              <span className="font-normal uppercase tracking-[1px] small">
                stay tuned
              </span>
            </div>
          </div>

          <div
            className="dock relative flex justify-between items-center p-4 md:p-6
            after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-[150px]
            after:-translate-x-1/2 after:rounded-full
            after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent)]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_3px_8px_rgba(0,0,0,0.05)]
          "
          >
            <div className="pr-1">
              <h4 className="pb-1  md:max-w-full">Work In Progress</h4>
              <p className="w-full text-sm tracking-wide font-normal text-greyscale-300 xl:text-base 2xl:text-md">
                coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
