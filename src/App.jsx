function App() {
  return (
    <div className=" p-20">
      <div className=" bg-[#000] rounded-3xl relative p-2 text-white  font-poppins">
        <div className="w-full bg-[#121212] flex flex-col justify-between rounded-2xl relative h-[80vh]">
          <div className=" flex justify-around items-center  p-4 ">
            <h1 className="capitalize">
              <img
                className="inline align-middle w-8 mr-4 h-8"
                src="pine.svg"
                alt=""
              />
              pine
            </h1>
            <div className="border capitalize px-10 py-3 items-center gap-12 flex rounded-xl">
              <a href="/">home</a>
              <a href="/">company</a>
              <a href="/">invest</a>
              <a href="/">career</a>
              <a href="/">support</a>
            </div>
            <div className="capitalize  items-center gap-5 flex ">
              <button className="rounded-lg px-4 p-2 bg-[#9fff79] text-[#121212]">
                sign in
              </button>
              <a href="/">
                <img src="xicon.svg" className="w-6" />
              </a>
              <a href="/">
                <img src="threadsicon.svg" className="w-6" />
              </a>
            </div>
          </div>
          <div className="flex p-5 py-10 gap-10 items-center">
            <div className="flex-1 flex flex-col gap-5">
              <p className="text-4xl">
                own stocks in startups with just one click
              </p>
              <p className="">
                building a portfolio of startups has never been easier wiith
                pine
              </p>
              <div className="flex gap-3">
                <p>easy payment</p>
                <p>easy payment</p>
                <p>easy payment</p>
              </div>
              <span className="border rounded-full p-3">
                +7 million invested
              </span>
            </div>
            <div className="flex-1">
              <div className="border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
