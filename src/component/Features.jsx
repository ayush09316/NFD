import activity from "../assets/feature/activities.webp";
import { features } from "../constant";
import Accordian from "../component/ui/Acordian";
import { useState } from "react";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      id="feature"
      className="relative w-full flex justify-center items-center  bg-white py-[170px]"
    >
      <div className="absolute top-[-4rem] left-0 w-[20%] rounded-sm h-[4rem] z-40 bg-white"></div>
      <div className="absolute top-[-4rem] left-[20%]  w-[50%] bg-transparent border-t-[4rem] z-40 border-t-transparent border-l-white border-l-[10vw]"></div>

      <div className="w-full max-w-[1440px] mx-6 flex flex-col items-center justify-center gap-[110px]">
        <div className="flex flex-col justify-center items-center gap-6 text-centermax-w-[875px]">
          <h1 className=" Syne-family text-[60px] font-bold text-[#171717] leading-[72px]">
            Use all the benefits of NFD
          </h1>
          <p className="text-xl text-slate-500">
            Unlock the next level of control with customizable real-time feeds,
            charts, watchlists, and alerts with NFD.gg
          </p>
        </div>
        <div className="w-full flex justify-between items-center gap-16">
          <div className="flex flex-col items-center justify-center gap-5 cursor-pointer min-w-[463px]">
            {features?.map((feature, index) => (
              <Accordian
                key={index}
                isActive={index === activeIndex}
                title={feature.title}
                text={feature.text}
                setActiveIndex={setActiveIndex}
                index={index}
              />
            ))}
          </div>

          <div className="w-full max-w-[805px] relative self-start">
            <img src={activity} alt="activity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
