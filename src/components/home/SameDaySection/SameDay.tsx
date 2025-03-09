import Button from "../../ui/Button/Button";

const globeGif = " /globe.gif";

const SameDaySection = () => {
  return (
    <div className="relative h-fit ">
      <div
        className="inset-0 w-full h-full px-[5%] "
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(73, 199, 171, 0.7)), url(${globeGif})`,
          backgroundSize: "50",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "darken",
        }}
      >
        {" "}
        {/* Content Container */}
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="px-4 md:px-0">
            <p className="text-emerald-500 font-medium pt-8 md:pt-12 text-sm md:text-base">
              GET SAME-DAY ONLINE
            </p>
            <div className="flex flex-col md:flex-row md:justify-between pt-4 md:pt-10 gap-4 md:gap-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 max-w-2xl">
                Suboxone Treatment In 10 Minutes
              </h1>
              <Button
                variant="primary"
                className="text-base md:text-lg h-fit min-h-14 w-full md:w-auto"
              >
                Download The App Today →
              </Button>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="flex flex-col gap-4 md:gap-6 mx-auto mt-8 md:mt-16 px-4 md:px-0">
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-10">
              <div className="border border-[#49C7AB] bg-white w-full md:w-1/3 rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="font-medium mb-2 text-lg md:text-xl">
                  Step 1 - Download The App
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Click the link to download our app to get started.
                </p>
              </div>

              <div className="border border-[#49C7AB] bg-white w-full md:w-1/3 rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="font-medium mb-2 text-lg md:text-xl">
                  Step 2 - Complete Onboarding Process & Documents
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Provide medical history and sign treatment forms.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-10">
              <div className="border border-[#49C7AB] bg-white w-full md:w-1/3 rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="font-medium mb-2 text-lg md:text-xl">
                  Step 3 - Schedule Your First Visit
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Our onboarding team will send you a link to book your first
                  meeting. Many times, this is the same day.
                </p>
              </div>

              <div className="border border-[#49C7AB] bg-white w-full md:w-1/3 rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="font-medium mb-2 text-lg md:text-xl">
                  Step 4 - Meet With Licensed Provider
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  At the time of your appointment, open the app on your phone to
                  have your visit.
                </p>
              </div>
            </div>

            <div className="border border-[#49C7AB] bg-white mx-auto mb-6 md:mb-10 w-full md:w-1/2 rounded-lg p-4 md:p-6 shadow-sm">
              <h3 className="font-medium mb-2 text-lg md:text-xl">
                Step 5 - Pick Up Medication
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Your script will be sent to your pharmacy of choice for pick up
                the same day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SameDaySection;
