import aggoverlay from "../assets/aggregator/AggOverlayOPT.webp";
import aggcontent from "../assets/aggregator/AggContentOPT.webp";
import aggcontect2 from "../assets/aggregator/AggContent2OPT.webp";
import icon from "../assets/aggregator/icon.svg";
import icon2 from "../assets/aggregator/icon2.svg";
import icon3 from "../assets/aggregator/icon3.svg";
import OPT from "../assets/aggregator/OPT.webp";
import twitter from '../assets/contact/twitter.svg'

const Aggregator = () => {
  return (
    <div
      id="aggregator"
      className="bg-gradient-to-r from-[#232324] to-[#151516] w-full flex justify-center z-40 h-[200rem] relative pb-[170rrem] "
    >
      {/* <div className="agg-bg"></div> */}
      <div className="grid-bg"></div>
      <div className="max-w-[1220px]  w-full mx-[100px] ">
        <div className="relative mt-[135px] h-[1400px]">
          <div className="absolute top-0 left-0 flex justify-between items-center w-full h-full gap-[120px]">
            <div className="w-full h-full flex flex-col gap-[28rem] relative  z-10 max-w-[640px]">
              <img
                src={aggcontent}
                alt="aggcontent"
                className="w-full h-auto object-contain"
              />
              <img
                src={aggcontect2}
                alt="aggcontect2"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="w-full flex justify-center items-start gap-[120px] sticky top-[170px] ">
            <div className="w-full max-w-[858px] ">
              <img src={aggoverlay} alt="aggoverlay" />
            </div>
            <div className="max-w-[460px] min-w-[460px] w-[460px]">
              <h3 className="w-[220px] h-[47px] flex rounded-[50px] justify-center items-center text-white bg-gradient-to-r from-[#d1a0ff] to-[#dabfff] ">
                FIRST WEB3 CRYPTO
              </h3>
              <h2 className="mt-8 text-white text-5xl Syne-family font-[700]">
                Keeping track of projects in
                <span className="text-gradient"> one place</span>
              </h2>
              <p className="mt-12 text-[#838383] text-xl">
                The NFD.gg aggregator allows you to create a specific card of
                any project and parse any type of information from Discord,
                Twitter, Dune Analytics, TradingView, Github etc. into your own
                dashboard.
              </p>
              <div className="flex mt-12 items-center">
                <a href="https://app.nfd.gg/login">
                  <button className="relative min-w-[206px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[183px]">
                    <div className="button-start"></div>
                    <span className="hero-button-main"></span>
                    <div className="w-full h-full absolute flex items-center justify-center gap-4 z-1 rounded-full text-white">
                      Create Platform
                    </div>
                    <div className="button-start button-end"></div>
                  </button>
                </a>
                <a className="bg-transparent" href="#roadmap">
                  <button className="min-w-[206px] text-white font-[500] text-lg h-[61px]">
                    View Roadmap
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-[170px] ">
          <div className="w-full flex flex-col justify-center items-center text-center">
            <h2 className="text-white Syne-family max-w-[615px] text-5xl">
              Find alpha before anyone else with us
            </h2>
            <div className="w-full mt-[60px] flex justify-between gap-7">
              <div className="w-full max-w-[460px] rounded-[50px] bg-[#495cec] text-sm h-[74px] flex justify-center items-center gap-4 text-white font-[500] relative">
                <img src={icon} alt="icon" />
                Add a list of Twitter accounts
              </div>

              <div className="text-sm w-full max-w-[460px] rounded-[50px] bg-[#ff754c] h-[74px] flex justify-center items-center gap-4 text-white font-[500] relative">
                <img src={icon2} alt="icon" />
                Follow their new subscriptions.
              </div>

              <div className="w-full max-w-[460px] rounded-[50px] bg-[#6c52ee] h-[74px] flex justify-center text-sm items-center gap-4 text-white font-[500] relative">
                <img src={icon3} alt="icon" />
                We&apos;ll show you matches on those subscriptions
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="w-full ">
          <div className="w-full flex justify-center relative pt-[100px] px-[122px]">
            <div className="w-full max-w-[1195px h-[476px]">
              <div className="w-full h-full relative flex justify-center items-center">
              <img src={OPT} alt="pic"/>
              </div>
            </div>

            <section className=" w-full absolute bottom-[-150px] left-0 h-[217px] px-[50px] bg-[#6c52ee] rounded-3xl flex items-center justify-between overflow-auto">
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-medium text-4xl"> Finding Alpha is easy</h3>
                <p className="max-w-[475px] w-ull text-white text-lg">Alpha search tool will let you be one of the first people to find the most promising alpha by tracking influencers and the most hyped projects.</p>
              </div>

              <div className="flex w-[500px] gap-[45px] justify-end">
                <a>
                <button className='relative min-w-[206px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[206px]'>
              <div className='contact-button-start'></div>
              <span className='contact-button-main '></span>
              <div className='w-full h-full absolute flex items-center justify-center gap-4 z-1  rounded-full text-white'>
               
                <span className='text-purple-900'>Try now for free</span>
               </div>
              <div className='contact-button-start contact-button-end'></div>
            </button>
                </a>

                <a>
                <button className='relative min-w-[206px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[206px]'>
              <div className='contact-button-start-1'></div>
              <span className='contact-button-main-1 '></span>
              <div className='w-full h-full absolute flex items-center justify-center gap-4 z-1  rounded-full text-white'>
                <img src={twitter} alt="discord" />
                <span >Follow twitter</span>
               </div>
              <div className='contact-button-start-1 contact-button-end-1'></div>
            </button>
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className="pl-[50px] pt-[272px]">
          <div className="flex gap-[68px] h-[738px] relative overflow-hidden">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aggregator;
