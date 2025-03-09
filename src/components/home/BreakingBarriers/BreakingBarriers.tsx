const bb = " /bb.gif";

const BreakingBarriers = () => {
  return (
    <div className="relative h-fit">
      <div
        className="inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "lighten",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-center mx-auto py-8 lg:py-16 gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
              Breaking Barriers to Recovery
            </h1>
            <p className="text-lg md:text-xl mb-8 lg:mb-12 max-w-2xl text-[#475569]">
              Our mission is to make Medication Assisted Treatment accessible to
              people in both major cities and rural communities. We're deeply
              committed to removing obstacles to recovery, ensuring our clients
              get the support they need.
            </p>
          </div>
          <div className="flex flex-col justify-between text-lg md:text-xl w-full lg:w-1/2 gap-8 lg:gap-0">
            <div className="text-[#475569]">
              We're not just offering a service; we're creating a lifeline. Our
              platform is designed to eliminate the challenges that often stand
              in the way of recovery—whether it's stigma, inconvenience, or lack
              of access to quality care
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 lg:mt-0">
              <div className="text-center">
                <div className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#49C7AB]">
                  500+
                </div>
                <div className="text-[#475569] text-base md:text-lg lg:text-xl">
                  Patients Treated
                </div>
              </div>
              <div className="text-center">
                <div className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#49C7AB]">
                  300+
                </div>
                <div className="text-[#475569] text-base md:text-lg lg:text-xl">
                  Centers Nationwide
                </div>
              </div>
              <div className="text-center">
                <div className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#49C7AB]">
                  4.9/5
                </div>
                <div className="text-[#475569] text-base md:text-lg lg:text-xl">
                  Patients Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingBarriers;
