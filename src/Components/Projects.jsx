import React from "react";
import Marquee from "react-fast-marquee"; 
import skills from "../assets/skills";
import {SquareArrowOutUpRight, Github} from 'lucide-react'


const firstRow = skills.slice(0, skills.length);

const ReviewCard = ({ img, title, description, link, github }) => {
  return (
    <figure className="relative h-72 w-72 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] m-4 hover:scale-110 hover:duration-300 hover:border hover:border-[#31519f]">
      <div className="w-full h-full flex flex-col items-center justify-around gap-2">
        <div className="w-full h-[40%] flex flex-col items-center justify-between">
          <img src={img} alt={title} className="h-16 rounded-xl" />
          <span className="text-2xl font-semibold">{title}</span>
        </div>
          <span className="text-[12px] text-slate-100 text-center overflow-scroll h-[30%]">{description}</span>
          <div className="flex items-center gap-4">
            <SquareArrowOutUpRight size={20} className="hover:text-[#31519f]" onClick={() => window.open(link, '_blank')}/>
              <span className="text-[28px] mb-1">|</span>
            <Github size={20} className="hover:text-[#31519f]" onClick={() => window.open(github, '_blank')}/>
          </div>
      </div>
    </figure>
  );
};

export default function Projects() {
  return (
    <>
    <div id="projects" className="h-24"></div>

    <div className="relative lg:w-[75vw] w-[90vw] mx-auto border-0 overflow-hidden rounded-2xl">

        <p className="lg:text-4xl text-3xl text-white text-center font-semibold">My Projects</p>

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl text-white">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-background"></div>
    </div>
    </div>
    </>
  );
}
