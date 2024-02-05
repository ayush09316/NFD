// eslint-disable-next-line react/prop-types
const Form = ({ handleForm, setOpenForm }) => {
  return (
    <>
      <button
        className="fixed top-[15%] right-[38%] rounded-xl bg-slate-300 w-10 h-10 z-50"
        onClick={() => handleForm((prev) => setOpenForm(!prev))}
      >
        <div className="bg-black w-[2px] h-6 absolute top-2 left-5 rotate-45 rounded-lg" />
        <div className="bg-black w-[2px] h-6 absolute top-2 left-5 -rotate-45 rounded-lg" />
      </button>
      <div className="fixed top-40 px-5 pb-10 rounded-xl z-40 bg-slate-200 w-[25%] ">
        <h1 className="Syne-family text-2xl py-3 px-5 font-bold"> Become a part </h1>
        <hr />
        <form className="flex flex-col gap-5 my-5">
          <input
            className="h-12 p-4 rounded-xl border-2 border-slate-300"
            placeholder="What is your name?*"
          />
          <input
            className="h-12 p-4 rounded-xl border-2 border-slate-300"
            placeholder="Links to your social networks"
          />
          <input
            className="h-12 rounded-xl border-2 border-slate-300 p-4"
            placeholder="Your message:*"
          />
          <input
            className="h-12 rounded-xl border-2 border-slate-300 p-4"
            placeholder="Additional links:"
          />
        </form>

        <button className="relative h-[49px] flex items-start bg-transparent text-white justify-start w-full max-w-[353px]">
          <div className="button-start"></div>
          <span className="hero-button-main"></span>
          <div className="w-full h-full absolute flex items-center justify-center gap-4 z-1 rounded-full text-white">
            Send
          </div>
          <div className="button-start button-end"></div>
        </button>
      </div>
    </>
  );
};

export default Form;
