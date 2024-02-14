import teddy from '../assets/hero/teddy.svg';
import info from '../assets/hero/info.svg';
import wide from '../assets/hero/wide.svg';
import Private from '../assets/hero/private.svg';
import software from '../assets/hero/software.svg';
import macOs from '../assets/hero/macOs.svg';
// import window from '../assets/hero/windows.svg';
import buttonEffect from '../assets/hero/button-effect.svg';

const Hero = () => {
  return (
    <div className='flex xs:flex-col xl:flex-row xl:gap-0 xs:gap-4 xs:rounded-3 items-center w-full pt-[107px] pb-4 mr-6 ml-6 max-w-[1440px]'>
      <div className='flex relative overflow-hidden  flex-col items-center rounded-tl-xl rounded-bl-xl pt-[115px] pr-16 pl-16 pb-[115px] bg-white w-[50%] '>
        <img src={teddy} alt="teddy" />
        <div className='flex flex-col mt-8  items-center'>
          <span className='font-bold text-6xl Syne-family text-black'>NFD platform</span>
          <span className='font-bold text-5xl Syne-family text-[#848aff] text-center'>“NFD.gg”</span>
        </div>

        <div className='mt-4 text-center w-full max-w-[568px] text-lg'>
          <p>An Alpha community 2.0 with its own platform for participating, searching, and tracking any crypto related information.</p>
        </div>

        <div className='xl:flex gap-5 mt-10 justify-between xs:hidden'>
          <div className='bg-white flex items-center justify-between rounded-2xl gap-3 py-1 pl-1 pr-5 shadow-lg'>
            <div className='w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100'>
              <img src={info} alt='info'/>
            </div>
            <p>Info in one place</p>
          </div>
          <div className='bg-white flex items-center justify-between rounded-2xl gap-3 py-1 pl-1 pr-5 shadow-lg'>
            <div className='w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100'>
              <img src={Private} alt='private'/>
            </div>
            <p>Private Tools</p>
          </div>
          <div className='bg-white flex items-center justify-between rounded-2xl gap-3 py-1 pl-1 pr-5 shadow-lg'>
            <div className='w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100'>
              <img src={wide} alt='wide'/>
            </div>
            <p>Wide functionality</p>
          </div>
        </div>

        <div className='mt-12 w-full flex justify-center items-center gap-9'>
          <div className='w-full max-w-[183px]'>
            <a href='https://app.nfd.gg/login'>
            <button className='relative min-w-[120px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[183px]'>
              <div className='button-start'></div>
              <span className='hero-button-main'></span>
              <div className='w-full h-full absolute flex items-center justify-center gap-4 z-1 rounded-full text-white'>Try Platform</div>
              <div className='button-start button-end'></div>
            </button>
            </a>
          </div>
          <button className='hero-button '>How it works?</button>
        </div>
        <div className='hero-effect bottom-0'></div>
      
    </div>

    <div className='bg-black relative rounded-tr-[12px] rounded-br-[12px] h-auto w-[50%] flex flex-col items-center px-16 pt-[115px] pb-[115px]'>
    <div className='hero-effect top-0 -scale-y-100'></div>
      <img src={software} alt="software" />
      <div className='flex flex-col items-center mt-10 '>
        <span className='hero-black-text'>NFD software</span>
        <span className='hero-gradient-text'>“Combine”</span>
      </div>

      <p className='w-full mt-4 text-center max-w-[568px] text-lg text-slate-500'>Handle your crypto-wallets, farm activities and retrodrops on a single app.</p>

      <div className='mt-10 items-center xl:flex xs:hidden '>
        <button className='flex flex-col pb-6 w-[256px] relative border-b-2 border-slate-800'>
         <div className='flex gap-2 w-full items-center justify-center'>
         <img src={macOs} alt="macOs" />
         <span className='text-slate-600'>macOs</span>
         </div>
         <div className='absolute bottom-0 opacity-0 flex left-[-28px]'>
          <img src={buttonEffect} alt="button-effect" />
         </div>
        </button>
        <button className='flex flex-col pb-6 w-[256px] relative border-b-2 border-purple-900'>
         <div className='flex gap-2 w-full items-center justify-center'>
         <img src={macOs} alt="macOs" />
         <span className='text-slate-600'>Windows</span>
         </div>
         <div className='absolute bottom-0  opacity-1 flex left-[-25px] right-[-25px]'>
          <img src={buttonEffect} alt="button-effect" />
         </div>
        </button>
      </div>
      <div className='mt-12 w-full flex justify-center items-center gap-9'>
          <div className='w-full max-w-[183px]'>
            <button className='relative min-w-[120px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[183px]'>
              <div className='button-start'></div>
              <span className='hero-button-main'></span>
              <div className='w-full h-full absolute flex items-center justify-center gap-4 z-1 rounded-full text-white'>DownLoad</div>
              <div className='button-start button-end'></div>
            </button>
          </div>
          <button className='hero-button '>How it works?</button>
        </div>
    </div>
    </div>
  )
}

export default Hero
