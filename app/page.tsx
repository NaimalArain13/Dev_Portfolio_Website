
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-black  min-h-screen">
      
      <div className="flex flex-col justify-center h-screen pl-8">
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            It's Naimal Salahuddin
          </h1>

          <h2 className="text-white text-xl lg:text-4xl font-semibold ">
            <span className="relative inline-block shadow-lg hover:shadow-2xl hover:scale-105 hover:text-yellow-100 animate-pulse">a Front-end
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></span>
            </span>{" "}
             Developer
          </h2>
          
            <button className="text-black text-1xl font-semibold rounded-md bg-cyan-300 px-3 py-1">Learn More</button>
          
        </div>
      </div>

      {/*Image Section */}

      <div className="absolute right-10 lg:right-20 transform -translate-y-2/4 top-2/4">
        <Image
          src={"/image3.jpeg"}
          width={80}
          height={80}
          alt="Naimal Salahuddin"
          className="rounded-lg shadow-lg  lg:w-64 transition-transform duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Home;
