function App() {
  return (
    <div className=" p-10">
      <div className=" bg-[#620000] rounded-3xl relative p-2 text-white uppercase font-poppins">
        <div className="w-full relative h-[90vh]">
          <img
            className="rounded-2xl absolute w-full h-full object-cover"
            src="student.jpg"
            alt=""
          />
          <div className="  absolute  p-2 w-[15%]">
            <img className="h-[50px] mx-auto" src="unilag.png" alt="" />
          </div>
          <div className="bg-[#620000] w-[85%] rounded-2xl  absolute right-0 p-4">
            <div className="absolute top-0 -left-12 z-10  w-12 h-6 bg-transparent rounded-tr-2xl shadow-[2rem_0px_0px_0px_#620000]"></div>
            <div className="absolute -bottom-12 right-0 z-10  w-6 h-12 bg-transparent rounded-tr-2xl shadow-[0rem_-2rem_0px_0px_#620000]"></div>
            <div className="flex gap-2 w-full justify-around  ">
              <a href="/">news</a>
              <a href="/">events</a>
              <a href="/">academics</a>
              <a href="/">research</a>
              <a href="/">resources</a>
              <a href="/">alumni</a>
              <a href="/">about</a>
            </div>
          </div>
          <div className="bg-[#620000]  rounded-2xl  absolute bottom-0 max-w-[36%] text-left p-4">
            <div className="absolute -top-12 -left-0 z-10  w-6 h-12 bg-transparent rounded-bl-2xl shadow-[0rem_1.5rem_0px_0px_#620000]"></div>
            <div className="absolute bottom-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-bl-2xl shadow-[-2rem_0px_0px_0px_#620000]"></div>

            <h1 className="text-6xl pb-4 font-bold">
              university <br /> of lagos
            </h1>
            <h2>
              The Nation&#39;s Pride - A domain of knowledge and legacy of
              excellence, instrumental in the production of academia with
              tremendous impact in Nigeria.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
