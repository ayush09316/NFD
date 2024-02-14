import circle from "../assets/member/circle.webp";
import blurr from "../assets/member/blurr.webp";
import william from "../assets/member/villiam.webp";
import Den from "../assets/member/den.webp";
import nik from "../assets/member/nik.png";
import leoor  from "../assets/member/leoor.webp";
import vitale from "../assets/member/vitale.webp";
import minter from "../assets/member/minter.webp";
import { useState } from "react";
import Form from "./Form";

const Members = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleForm = () => {
    setOpenForm(!openForm);
  }
  return (
    <div className="relative  w-full flex justify-center items-center bg-white py-[170px] ">
      <div className="absolute top-[50%] left-[-10%] opacity-60 ">
        <img src={circle} alt="circle" />
      </div>
      <div className="absolute bottom-[-12%] right-0 z-20">
        <img src={blurr} alt="blur" />
      </div>

      <div className={`w-full z-30 max-w-[1440px] ${openForm? 'blur-md':'blur-0'} `}>
        <div className=" w-full flex justify-between items-center gap-9 relative z-30 ">
          <div className="sticky flex flex-col self-start items-start justify-center max-w-[559px] top-[270px]">
            <h1 className=" Syne-family text-[60px] font-bold text-[#171717] leading-[72px]">
              We are delighted to introduce the NFD team members to you
            </h1>
            <p className="mt-9 mb-12">
              NFD team is always open to new partnerships and new team members,
              so if you have a desire to join and you have a big experience in
              development or crypto - just leave your request in form and we
              will consider it.
            </p>
            <button className="relative min-w-[120px] h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[183px]" onClick={handleForm}>
              <div className="button-start"></div>
              <span className="hero-button-main max-w-[206px]"></span>
              <div className="w-full h-full absolute flex items-center justify-center gap-4 z-1 rounded-full text-white">
                Fill form
              </div>
              <div className="button-start button-end"></div>
            </button>
          </div>

          <div className="bg-white flex  items-center justify-end w-full max-w-[805px] rounded-3xl overflow-hidden flex-wrap z-50">
            <div className="bg-white flex gap-6 justify-center items-center flex-col w-full max-w-[260px] py-[55px] border-2">
              <div className="flex justify-center items-center relative w-[158px] h-[158px] rounded-full border-2">
                <div className="w-[150px] h-[150px] rounded-[50%] bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee]">
                  <img src={william} alt="william" />
                </div>
              </div>

              <div className="text-center flex flex-col items-center justify-center gap-2">
                <h4>William</h4>
                <span>CTO</span>
              </div>
            </div>
            <div className="bg-white flex gap-6 justify-center items-center flex-col w-full max-w-[260px] py-[55px] border-[#e1e9f0] border-2">
              <div className="flex  justify-center items-center relative w-[158px] h-[158px] rounded-full border-2">
                <div className="w-[150px] h-[150px] rounded-[50%] bg-gradient-to-r from-[#ffecd2] to-[#fcb69f]">
                  <img src={leoor} alt="william" />
                </div>
              </div>

              <div className="text-center flex flex-col items-center justify-center gap-2">
                <h4>Leo</h4>
                <span>CEO</span>
              </div>
            </div>
            <div className="bg-white flex gap-6 justify-center items-center flex-col w-full max-w-[260px] py-[55px]  border-[#e1e9f0]  border-2">
              <div className="flex justify-center items-center relative w-[158px] h-[158px] rounded-full border-2">
                <div className="w-[150px] h-[150px] rounded-[50%] bg-gradient-to-r from-[#d4fc79] to-[#96e6a1]">
                  <img src={minter} alt="william" />
                </div>
              </div>

              <div className="text-center flex flex-col items-center justify-center gap-2">
                <h4>Vadim</h4>
                <span>CCO</span>
              </div>
            </div>
            <div className="bg-white flex gap-6 justify-center items-center flex-col w-full max-w-[260px] py-[55px]  border-[#e1e9f0]  border-2">
              <div className="flex rounded-full justify-center items-center relative w-[158px] h-[158px] border-2">
                <div className="w-[150px] h-[150px] rounded-[50%] bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc]">
                  <img src={vitale} alt="william" />
                </div>
              </div>

              <div className="text-center flex flex-col items-center justify-center gap-2">
                <h4>Vitale</h4>
                <span>Team lead</span>
              </div>
            </div>
            <div className="bg-white flex gap-6 justify-center items-center flex-col w-full max-w-[260px] py-[55px] border-[#e1e9f0]  border-2">
              <div className="flex justify-center items-center relative w-[158px] h-[158px] rounded-full border-2">
                <div className="w-[150px] h-[150px] rounded-[50%] bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0]">
                  <img src={nik} alt="william" />
                </div>
              </div>

              <div className="text-center flex flex-col items-center justify-center gap-2">
                <h4>Nitika</h4>
                <span>Frontend developer</span>
              </div>
            </div>
            <div className="bg-white flex gap-6 justify-center items-center flex-col w-full max-w-[260px] py-[55px]  border-[#e1e9f0]  border-2">
              <div className="flex justify-center items-center relative w-[158px] h-[158px] rounded-full border-2">
                <div className="w-[150px] h-[150px] rounded-[50%] bg-gradient-to-r from-[#a8edea] to-[#fed6e3]">
                  <img src={Den} alt="william" />
                </div>
              </div>

              <div className="text-center flex flex-col items-center justify-center gap-2">
                <h4>Den</h4>
                <span>Backend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        openForm && (
          <Form  handleForm={ handleForm} setOpenForm={setOpenForm}/>
        )
      }
    </div>
  );
};

export default Members;
