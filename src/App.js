import React, { useState } from "react";
import Img1 from "../src/assets/img-1.jpg";
import Img2 from "../src/assets/img-2.jpg";
import Img3 from "../src/assets/img-3.jpg";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const App = () => {
  const [isMobile, setisMobile] = useState(false);
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="bg-slate-300 w-[40%] absolute h-[100%] sm:h-[100vh]">
        <div className="absolute container mx-auto py-5 left-1 sm:left-8 pl-1 sm:pl-6">
          <div className="container mx-auto">
            {isMobile ? (
              <MobileNav setisMobile={setisMobile} isMobile={isMobile} />
            ) : (
              <Navbar setisMobile={setisMobile} isMobile={isMobile} />
            )}
            <div className="flex flex-col sm:flex-row justify-between gap-5 px-auto h-[89vh] w-[96vw] sm:w-[90vw]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[100%] smw-[63%]">
                <div className="col-span-1 sm:col-span-2">
                  <h1 className=" text-4xl md:text-5xl my-12">
                    Set the stage- <br />
                    any way you <br />
                    want
                  </h1>
                  <p className="text-xl cursor-pointer text-sky-400 font-bold font-mono my-10">
                    <span className="bg-white rounded-full p-4 pr-0">BRO</span>
                    WSE CARPETS
                  </p>
                </div>
                <div className="flex w-[99%] sm:w-30 flex-col sm:flex-row justify-between gap-5">
                  <img className="rounded" src={Img1} alt="img-1" />

                  <img className="rounded" src={Img3} alt="img-2" />
                </div>
              </div>

              <div className="w-[99%] sm:w-[40%] md:w-[60%] h-[100%]">
                <img
                  className="rounded w-[100%] h-[100%] "
                  src={Img2}
                  alt="img-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
