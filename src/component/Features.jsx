import activity from '../assets/feature/activities.webp'

const Features = () => {
  return (
    <div id='feature' className="relative w-full flex justify-center items-center bg-white py-[170px]">
        <div className='absolute top-[-4rem] left-0 w-[20%] rounded-sm h-[4rem] z-40 bg-white'></div>
      <div className="absolute top-[-4rem] left-[20%]  w-[50%] bg-transparent border-t-[4rem] z-40 border-t-transparent border-l-white border-l-[10vw]"></div>
       
      <div className="w-full max-w-[1440px] mx-6 flex flex-col items-center justify-center gap-[110px]">
        <div className="flex flex-col justify-center items-center gap-6 text-centermax-w-[875px]">
            <h1 className="feature-heading ">Use all the benefits of NFD</h1>
            <p className="text-xl text-slate-500">Unlock the next level of control with customizable real-time feeds, charts, watchlists, and alerts with NFD.gg</p>
        </div>
        <div className="w-full flex justify-between items-center gap-16">
            <div className='flex flex-col items-center justify-center gap-5 cursor-pointer min-w-[463px]'>
                <div className='w-full flex flex-col justify-center items-start gap-3 opacity-100 rounded-3xl p-6 max-w-[529px] border-2 bg-[#e8ebf1]'>
                    <span className='font-xl text-2xl'>Activities</span>
                    <span className='text-[#4f5662]'>Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money.</span>
                </div>

                <div className='w-full flex flex-col justify-center items-start gap-3 opacity-100 rounded-3xl p-6 max-w-[529px] border-2 '>
                
                    <span className='text-[#4f5662]'>Auto-Update feed</span>
                </div>

                <div className='w-full flex flex-col justify-center items-start gap-3 opacity-100 rounded-3xl p-6 max-w-[529px] border-2 '>
                    
                    <span className='text-[#4f5662]'>Calender</span>
                </div>

                <div className='w-full flex flex-col justify-center items-start gap-3 opacity-100 rounded-3xl p-6 max-w-[529px] border-2'>
                    <span className='text-[#4f5662]'>Aggregator</span>
                </div>

                <div className='w-full flex flex-col justify-center items-start gap-3 opacity-100 rounded-3xl p-6 max-w-[529px] border-2 '>
                    <span className='text-[#4f5662]'>Alpha Search</span>
                </div>
            </div>

            <div className="w-full max-w-[805px] relative self-start">
                <img src={activity} alt="activity"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
