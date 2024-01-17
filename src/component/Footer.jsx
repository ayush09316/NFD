import logo from '../assets/footer/logo.svg'

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center py-[110px] relative">
      <div className="w-full max-w-[1440px] mx-6 flex items-center justify-between">
        <div className="flex items-center justify-start">
            <img src={logo} alt="logo"/>
        <span className="ml-[60px] mr-[98px]">© 2023 NFD, INC. ALL RIGHTS RESERVED.</span>
            <div className="flex items-center justify-start gap-11 underline">
                <a href="https://www.nfd.gg/privacy-policy">Privacy</a>
                <a href="https://www.nfd.gg/term-of-use">Term of use</a>
            </div>
        </div>
        <div className='flex justify-center items-center w-auto gap-14'>
            <a className='text-purple-800'>contact@nfd.gg</a>
            <a className='w-full max-w-[170px] ' href='https://app.nfd.gg/login'>
            <button className='relative min-w-[120px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[170px]'>
              <div className='button-start'></div>
              <span className='hero-button-main'></span>
              <div className='w-full h-full absolute flex items-center justify-center gap-4 z-1 rounded-full text-white'>Try app</div>
              <div className='button-start button-end'></div>
            </button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
