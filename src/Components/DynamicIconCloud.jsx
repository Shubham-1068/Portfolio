import React from 'react';
import { Cloud } from 'react-icon-cloud';

// importing icons
import c from '../assets/images/c.png';
import css from '../assets/images/css.png';
import html from '../assets/images/html.png';
import java from '../assets/images/java.png';
import js from '../assets/images/js.png';
import python from '../assets/images/python.png';
import react from '../assets/images/react.png';
import typescript from '../assets/images/typescript.png';
import node from '../assets/images/node.png';
import mongo from '../assets/images/mongo.png';
import docker from '../assets/images/docker.png';
import git from '../assets/images/git.png';
import github from '../assets/images/github.png';
import express from '../assets/images/express.png';
import figma from '../assets/images/figma.png';
import linux from '../assets/images/linux.png';
import vercel from '../assets/images/vercel.png';
import vscode from '../assets/images/vscode.png';
import tailwind from '../assets/images/tailwind.png';
import postman from '../assets/images/postman.png';

const DynamicIconCloud = () => {
  const icons = [
    <img src={docker} alt="Docker Icon" className="w-12 h-12 object-contain" />,
    <img src={figma} alt="Figma Icon" className="w-12 h-12 object-contain" />,
    <img src={git} alt="Git Icon" className="w-12 h-12 object-contain" />,
    <img src={github} alt="GitHub Icon" className="w-12 h-12 object-contain" />,
    <img src={html} alt="HTML Icon" className="w-12 h-12 object-contain" />,
    <img src={java} alt="Java Icon" className="w-12 h-12 object-contain" />,
    <img src={js} alt="JavaScript Icon" className="w-12 h-12 object-contain" />,
    <img src={linux} alt="Linux Icon" className="w-12 h-12 object-contain" />,
    <img src={mongo} alt="MongoDB Icon" className="w-12 h-12 object-contain" />,
    <img src={node} alt="Node.js Icon" className="w-12 h-12 object-contain" />,
    <img src={postman} alt="Postman Icon" className="w-12 h-12 object-contain" />,
    <img src={react} alt="React Icon" className="w-12 h-12 object-contain" />,
    <img src={tailwind} alt="Tailwind CSS Icon" className="w-12 h-12 object-contain" />,
    <img src={typescript} alt="TypeScript Icon" className="w-12 h-12 object-contain" />,
    <img src={vercel} alt="Vercel Icon" className="w-12 h-12 object-contain" />,
    <img src={vscode} alt="VSCode Icon" className="w-12 h-12 object-contain" />,
    <img src={c} alt="C Language Icon" className="w-12 h-12 object-contain" />,
    <img src={css} alt="CSS Icon" className="w-12 h-12 object-contain" />,
    <img src={express} alt="Express.js Icon" className="w-12 h-12 object-contain" />,
    <img src={python} alt="Python Icon" className="w-12 h-12 object-contain" />,
  ];

  const tags = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Postman',
    'Tailwind CSS',
    'VSCode',
    'Linux',
    'Git',
    'GitHub',
    'Docker',
  ];

  return (
    <>
      <div id="skills" className="h-24"></div>

      <div className="w-full flex flex-col items-center">
        <p className="lg:text-4xl text-3xl text-white text-center font-semibold">Tech Stack</p>

        {/* Cloud component with Tailwind CSS for scaling */}
        <div className="transform scale-75"> {/* scale-75 shrinks the cloud */}
          <Cloud
            keepStatic={true}
            autoRotate={true}
            initialSpeed={0.05}
            maxSpeed={0.2}
            shape="sphere"
          >
            {icons.map((icon, index) => (
              <a key={index} href="#" onClick={(e) => e.preventDefault()} className="inline-block">
                {icon}
              </a>
            ))}
          </Cloud>
        </div>

        {/* Tags */}
        <div className="w-[80%] max-w-[700px] flex justify-center items-center flex-wrap gap-4">
          {tags.map((tag, index) => (
            <div key={index} className="bg-slate-800 hover:bg-[#2ba7dc] text-white px-2 py-1 text-[12px] md:text-sm font-semibold rounded-lg cursor-pointer">{tag}</div>
          ))}
        </div>
      </div>
      <div className="my-20 w-[80%] max-w-[600px] justify-self-center"></div>
    </>
  );
};

export default DynamicIconCloud;
