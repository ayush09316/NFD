import Block from "../assets/about/block.webp";
import model from "../assets/about/model.png";
import logo from "../assets/about/logo.svg";

const About = () => {
  return (
    <div id="about" className="w-full bg-white relative flex justify-center py-[170px] ">
      <div>
        <div className="sticky top-[170px] opacity-100 w-full flex justify-between items-center gap-[150px] mx-6">
          <div className=" flex flex-col w-full max-w-[350px]">
            <h2 className="about-heading">The first web3 crypto platform </h2>
            <h3 className="mt-12 text-black font-[700]"> Problem</h3>
            <p className="text-[#4f5662]">
              Today, even in alpha communities, there&aposs an enormous volume
              of information that members have to wade through for 6-8+ hours a
              day. Cutting through the noise of spam is a real problem even
              where there&aposs something genuinely worth knowing.
            </p>
          </div>

          <div className="w-full max-w-[800px] relative ">
            {/* <video
              muted
              preload="preload"
              controls={false}
              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] w-full h-full"
            >
              <source src={vid} type="video/webm" />
            </video> */}
            <img src={model} alt="vid" className="absolute bottom-[20%] right-[30%] w-[50%] h-[60%]" />
            <img src={Block} alt="block" />
          </div>
        </div>

        <div className="sticky top-10 max-w-[380px] w-full pt-[110px] bg-white flex flex-col">
          <h2 className="about-heading">We work to make your life easier </h2>
          <h3 className="mt-12 text-black font-[700]">Solution</h3>
          <p className="text-[#4f5662]">
            NFD.gg heralds a new era in alpha communities, one where they have
            their own platform, which structures and condenses relevant
            information on all these alpha activities, where our team monitors
            any updates on these activities 24/7. No more reading 2000+ discord
            messages a day and tracking twitter day in, day out. Everything you
            ever need to know can be found on NFD.gg.
          </p>
          <div className="flex flex-col w-full">
            <hr className="w-full my-9 bg-slate-300 h-1"></hr>
            <div className="rounded-2xl h-16 flex p-3 gap-4 items-center bg-white shadow-md">
              <div className="w-12 h-12 flex justify-center items-center rounded-lg bg-[#e8ebf1]">
                <img src={logo} alt="logo" />
              </div>
              <span className="leading-[21px] font-medium">
                NFD will save you time and help you earn money in crypto.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
