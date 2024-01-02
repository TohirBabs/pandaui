function App() {
  return (
    <div className=" p-10">
      <div className=" bg-[#000] rounded-3xl relative p-2 text-white  font-poppins">
        <div className="w-full bg-[#121212] rounded-2xl relative h-[90vh]">
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
        </div>
      </div>
    </div>
  );
}

export default App;
