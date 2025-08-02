export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-start justify-start pt-20">
      <h1 className="font-poppins text-6xl font-bold mb-6">
        UMD FINTECH CLUB
      </h1>
      <p className="font-poppins text-4xl font-bold mb-20 pl-14">
        Where finance meets innovation. <br></br> Learn, build, and lead at the intersection of Tech <br></br>and Money. 
      </p>
      <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 mt-12 mb-0">
        <img
          src="src/assets/gold-curve.svg"
          alt="Gold curve background"
          className="absolute top-0 left-0 w-full h-auto pointer-events-none"
          aria-hidden="true"
        />
        <div className="flex flex-col items-start pl-32 pt-32">
          <p className="font-poppins text-2xl font-bold text-black-500 bg-transparent">
            Empowering students through financial education <br /> and data-driven projects.
          </p>
          <button className="font-poppins font-bold bg-yellow-400 hover:bg-yellow-500 text-white text-4xl rounded-full px-8 py-4 shadow-lg transition-colors duration-200 w-[480px] h-[90px] mt-8">
            Join Us
          </button>
        </div>
        <div className="h-[90px]" />
      </div>
    </div>
  );
}
