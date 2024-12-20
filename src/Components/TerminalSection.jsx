import React from "react";
import { ChevronsLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FunTerminal from "./FunTerminal";
import heart from "../assets/heart.svg";

function Terminal() {
  return (
    <>
      <div className="fixed z-50 top-0 left-0 backdrop-blur-sm bg-black/50 h-screen w-screen flex flex-col justify-center items-center">
        <div className="absolute top-0 w-screen h-24 flex justify-center items-center cursor-default">
          <Link
            to="/"
            className="absolute my-auto left-7 hover:bg-slate-900 p-2 rounded-full flex justify-center items-center"
          >
            <ChevronsLeft size={32} color="white" />
          </Link>
        </div>

        <div className="mt-0 flex justify-around">
          <FunTerminal />
        </div>
      </div>
    </>
  );
}

export default Terminal;
