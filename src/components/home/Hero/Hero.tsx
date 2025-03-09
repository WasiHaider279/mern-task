import Navbar from "../../layout/Navbar/Navbar";
import Button from "../../ui/Button/Button";
const heroImage = " /hero.png";
const Hero = () => {
  return (
    <section
      className=" h-[100vh] md:h-[135vh] bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="pt-4 sm:pt-6 md:pt-8 relative w-[95%] md:w-[90%] lg:w-[80%] flex flex-col mx-auto">
        <Navbar />
        <main className="pt-[16rem] text-white">
          <h1 className="font-normal text-lg sm:text-xl md:text-2xl">
            No lines.Less hassle, Lower costs.
          </h1>
          <p className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-tight">
            Easy Online Suboxone <br className="hidden sm:block" /> Treatment
            for Opioid
            <br className="hidden sm:block" /> Addiction
          </p>
          <Button className="!h-[40px] sm:!h-[46px] md:!h-[52px] mt-6 sm:mt-8 flex items-center gap-2 text-sm sm:text-base">
            Download the App today{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.05026 14.9498L5.40382 14.5962M7.52514 12.4749L8.5858 11.4142M10.7071 9.29291L14.9498 5.05027"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.46448 5.05027H14.9498"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9498 13.5355V5.05024"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </main>
      </div>
    </section>
  );
};

export default Hero;
