export default function Main() {
  return (
    <div className="container sm:px-0 px-4 mx-auto">
      <div className="sm:w-8/12 mx-auto">
        <p className="sm:text-6xl text-4xl mt-16 inter font-bold text-center">Discover Furniture With Hight Quality Wood</p>
        <p className="sm:text-md my-6 inter text-center text-black/60">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        </p>
      </div>
      <div className="relative sm:mt-16">
        <div className="sm:w-6/12 w-12/12 mx-auto shadow-md flex items-center bg-white sm:absolute  sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
          <div className="w-1/12 flex items-center">
            <img src="/search.svg" className="w-10 mx-auto" />
          </div>
          <input type="text" placeholder="Search Property" className="py-6 w-8/12 text-md caret-blue-500 outline-none " />
          <div className="w-3/12 items-center flex ">
            <div className="bg-[#518581]  w-full cursor-pointer hover:bg-[#518581]/90">
              <p className="text-center text-white font-bold py-4">Search</p>
            </div>
          </div>
        </div>
        <div className="sm:w-9/12 sm:mt-0 mt-4 mx-auto">
          <img src="/main-img.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
