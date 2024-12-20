import React from "react";
import { ChevronsLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <>
      <div className="relative h-24 flex justify-center items-center cursor-default">
        <Link to="/" className="absolute my-auto left-7 hover:bg-slate-900 p-2 rounded-full flex justify-center items-center"><ChevronsLeft size={32} color="white" /></Link>
        <div className="text-white text-4xl font-semibold">Blogs</div>
      </div>

      <div className="text-white text-4xl mt-52">Blogs here !!!</div>
    </>
  );
}

export default Blogs;
