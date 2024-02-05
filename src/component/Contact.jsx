import star from '../assets/contact/star.svg'
import hand from '../assets/contact/hand.svg'
import Discord from '../assets/contact/discord.svg'
import twitter from '../assets/contact/twitter.svg'
import left from '../assets/contact/left_blur.webp'
import right from '../assets/contact/right.webp'

const Contact = () => {
  return (
    <div id='contact-us' className="w-full bg-white">
        <div className=" relative w-full flex justify-center items-center h-[700px] rounded-b-[100px] bg-[#6c52ee] z-10">
            <div className='skew-border'></div>
            <div className='absolute z-[1] left-0'>
                <img src={left} alt='left'/>
            </div>
            <div className='absolute z-[1] right-0'>
                <img src={right} alt='left'/>
            </div>
            <div className='absolute left-[20%] top-[20%] scale-100'>
                <img src={star} alt="star"/>
            </div>
            <div className='flex flex-col items-center justify-center gap-12 relative mt-[100px] z-10 '>
            <h3 className='contact-heading'>Join our community</h3>
            <div className='flex items-center gap-10 w-full justify-center'>
                <button className='relative min-w-[120px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[183px]'>
              <div className='contact-button-start'></div>
              <span className='contact-button-main '></span>
              <div className='w-full h-full absolute flex items-center justify-center gap-4 z-1  rounded-full text-white'>
                <img src={Discord} alt="discord" />
                <span className='text-purple-900'>Join Discord</span>
               </div>
              <div className='contact-button-start contact-button-end'></div>
            </button>

            <button className='relative min-w-[120px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[183px]'>
              <div className='contact-button-start-1'></div>
              <span className='contact-button-main-1 '></span>
              <div className='w-full h-full absolute flex items-center justify-center gap-4 z-1  rounded-full text-white'>
                <img src={twitter} alt="discord" />
                <span >Follow twitter</span>
               </div>
              <div className='contact-button-start-1 contact-button-end-1'></div>
            </button>
            </div>
            <a href='https://docs.nfd.gg/main/eng-nfd.gg-platform/what-is-nfd.gg' className='text-white underline cursor-pointer'>Read our whitepaper</a>
            </div>
            <div className='absolute left-[70%] top-[80%] scale-100'>
                <img src={star} alt="star"/>
            </div>
            <div className='absolute left-[10%] bottom-0'>
                <img src={hand} alt="star"/>
            </div>
        </div>
    </div>
  )
}

export default Contact
