import ellipse from "../assets/roadmap/ellipse.webp";
import circle from "../assets/roadmap/circle.webp";
import Right from "../assets/roadmap/small-circle.webp";

const Roadmap = () => {
  return (
    <div className="roadmap-bg">
      <div className="skew-border"></div>
      <div className='absolute bottom-0 left-0 w-[20%] rounded-sm h-[8rem] z-40 bg-white'></div>
      <div className="absolute bottom-0 left-[20%]  w-[50%] bg-transparent border-t-[8rem] z-40 border-t-transparent border-l-white border-l-[10vw]"></div>
      <div className="roadmap-overlay"></div>
      <div className="absolute opacity-60 top-[20%] left-[-15%]">
        <img src={ellipse} alt="ellipse" />
      </div>
      <div className="absolute top-[15%] left-[30%] opacity-60">
        <img src={circle} alt="circle" />
      </div>
      <div className="absolute top-[15%] left-[65%] opacity-60">
        <img src={Right} alt="right" />
      </div>
      <div className="w-full max-w-[1440px] mx-6 flex flex-col items-center justify-center gap-[110px]">
        <div className="flex items-center justify-center flex-col">
          <h1 className="roadmap-heading">
            NFD - game changing crypto platform
          </h1>
          <div className="flex gap-11 items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-green-500 "></div>
              <span className="text-white text-sm">Done</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-orange-500 "></div>
              <span className="text-white text-sm">In work</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-white "></div>
              <span className="text-white text-sm">Upcoming</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full relative items-center justify-center">
          <div className="absolute w-[100vw] top-0 h-[1px] bg-slate-100"></div>
          <div className="flex w-full justify-between items-start">
            <div className="flex flex-col justify-start items-start">
              <div className="absolute top-[-7.5px] w-4 h-4 rounded-full bg-purple-700 blur-[2px]"></div>
              <span className="text-white mt-7 text-xl">Stage 1</span>
              <div className="w-[73px] h-[1px] bg-white my-4"></div>
              <div className="flex justify-center items-start flex-col gap-2.5 max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-green-500 "></div>
                  <span className="text-white text-sm">Development</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-green-500 "></div>
                  <span className="text-white text-sm">
                    Activities and Aggregator
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-green-500 "></div>
                  <span className="text-white text-sm">Alpha test</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-green-500 "></div>
                  <span className="text-white text-sm">Alpha search tool</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-orange-400 "></div>
                  <span className="text-white text-sm">Beta test</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="absolute top-[-7.5px] w-4 h-4 rounded-full bg-slate-200 blur-[2px]"></div>
              <span className="text-white mt-7 text-xl">Stage 2</span>
              <div className="w-[73px] h-[1px] bg-white my-4"></div>
              <div className="flex justify-center items-start flex-col gap-2.5 max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-orange-400 "></div>
                  <span className="text-white text-sm">ROI scanner</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-orange-400 "></div>
                  <span className="text-white text-sm">
                    Aggregator “Summary”
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-orange-400 "></div>
                  <span className="text-white text-sm">Twitter Scanner tool</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-slate-200 "></div>
                  <span className="text-white text-sm">Whale’s analysis</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-orange-400 "></div>
                  <span className="text-white text-sm">Blocks in Aggregator</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start">
              <div className="absolute top-[-7.5px] w-4 h-4 rounded-full bg-slate-200 blur-[2px]"></div>
              <span className="text-white mt-7 text-xl">Stage 3</span>
              <div className="w-[73px] h-[1px] bg-white my-4"></div>
              <div className="flex justify-center items-start flex-col gap-2.5 max-w-[220px]">
              <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-orange-400 "></div>
                  <span className="text-white text-sm">New sections in “Activities”</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-slate-200 "></div>
                  <span className="text-white text-sm">Launching NFD DAO</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-slate-200 "></div>
                  <span className="text-white text-sm">
                  Expanding the calendar
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-slate-200 "></div>
                  <span className="text-white text-sm">Token vesting tool</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-slate-200 "></div>
                  <span className="text-white text-sm">NFD labs incubator</span>
                </div>
               
              </div>
            </div>

            <div className="flex flex-col justify-start items-start">
              <div className="absolute top-[-7.5px] w-4 h-4 rounded-full bg-slate-200 blur-[2px]"></div>
              <span className="text-white mt-7 text-xl">Stage 4</span>
              <div className="w-[73px] h-[1px] bg-white my-4"></div>
              <div className="flex justify-center items-start flex-col gap-2.5 max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-slate-200 "></div>
                  <span className="text-white text-sm">Crypto arbitrage scanner</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-slate-200 "></div>
                  <span className="text-white text-sm">
                  Alpha search AI developing based on data collected
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-slate-200 "></div>
                  <span className="text-white text-sm">Adding any services based on NFD DAO votes</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start">
              <div className="absolute top-[-7.5px] w-4 h-4 rounded-full bg-slate-200 blur-[2px]"></div>
              <span className="text-white mt-7 text-xl">Stage 5</span>
              <div className="w-[73px] h-[1px] bg-white my-4"></div>
              <div className="flex justify-center items-start flex-col gap-2.5 max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-[50%] bg-slate-200 "></div>
                  <span className="text-white text-sm">The launch of Project “X” by NFD labs, which will change the culture of crypto investment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
