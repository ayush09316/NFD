import aggoverlay from '../assets/aggregator/AggOverlayOPT.webp'
import aggcontent from '../assets/aggregator/AggContentOPT.webp'
import aggcontect2 from '../assets/aggregator/AggContent2OPT.webp'

const Aggregator = () => {
  return (
    <div id="aggregator" className="bg-gradient-to-r from-[#232324] to-[#151516] w-full flex justify-center h-[100rem] relative pb-[170px]">
      {/* <div className="agg-bg"></div> */}
      <div className="grid-bg"></div>
      <div className="max-w-[1440px] mt-[135px] relative opacity-100">
        <div className='absolute top-0 left-0 flex justify-between items-center w-full h-full gap-[120px]'>
          <div className='w-full h-full flex flex-col justify-between relative max-w-[858px]'>
            <img src={aggcontent} alt="aggcontent" className="aggcontent"/>
            <img src={aggcontect2} alt="aggcontect2" className="aggcontect2"/>
          </div>
        </div>
       <div className="w-full flex justify-between items-start gap-[120px] sticky top-[170px]">
        <div className="w-full max-w-[858px] ">
          <img src={aggoverlay} alt="aggoverlay"/>
        </div>
        <div className="max-w-[460px] min-w-[460px] w-[460px]"> 
        <h3 className="w-[220px] h-[47px] flex rounded-[50px] justify-center items-center text-white bg-gradient-to-r from-[#d1a0ff] to-[#dabfff] ">FIRST WEB3 CRYPTO</h3>
        <h2 className="mt-8 text-white text-5xl Syne-family font-[700]">
        Keeping track of projects in 
        <span className="text-gradient">  one place</span>
        </h2>
        <p className="mt-12 text-[#838383] text-xl">
        The NFD.gg aggregator allows you to create a specific card of any project and parse any type of information from Discord, Twitter, Dune Analytics, TradingView, Github etc. into your own dashboard.
        </p>
        <div className="flex mt-12 items-center">
          <a  href='https://app.nfd.gg/login'>
          <button className='relative min-w-[206px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[183px]'>
              <div className='button-start'></div>
              <span className='hero-button-main'></span>
              <div className='w-full h-full absolute flex items-center justify-center gap-4 z-1 rounded-full text-white'>Create Platform</div>
              <div className='button-start button-end'></div>
            </button>
          </a>
          <a className="bg-transparent" href="#roadmap">
            <button className="min-w-[206px] text-white font-[500] text-lg h-[61px]">View Roadmap</button>
          </a>
        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Aggregator
