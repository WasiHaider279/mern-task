const RecoveryDelivered = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[80%] mx-auto gap-8 py-8 md:py-16">
      <div className="max-w-xl px-4 md:px-0">
        <p className="text-emerald-400 font-medium mb-3 md:mb-4 text-sm md:text-base">
          WELCOME TO RECOVERY DELIVERED
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
          Your Fully Online Suboxone Treatment Platform
        </h1>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          100% online opioid treatment with licensed buprenorphine providers
          starts at just $99/month.
        </p>
        <p className="text-gray-600 text-sm md:text-base">
          With monthly and weekly meetings based on where you are in your
          recovery. Get a same-day appointment and script.
        </p>
      </div>

      <div className="relative w-full md:w-auto">
        <div className="relative hidden md:block w-full md:w-[300px] h-[400px] md:h-[300px] lg:w-[550px] lg:h-[400px]">
          <div className="rounded-lg inset-0 bg-[url('/hero.png')] bg-cover bg-center w-full h-full" />
          <div className="absolute inset-0 bg-black/40 rounded-lg bg-opacity-40 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="152"
              height="145"
              viewBox="0 0 152 145"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_5_457)">
                <ellipse
                  cx="76"
                  cy="72.6083"
                  rx="74"
                  ry="70.6083"
                  fill="#49C7AB"
                  fillOpacity="0.3"
                />
              </g>
              <g filter="url(#filter1_f_5_457)">
                <ellipse
                  cx="75.6917"
                  cy="72.3"
                  rx="59.5083"
                  ry="56.7333"
                  fill="#49C7AB"
                  fillOpacity="0.4"
                />
              </g>
              <rect
                x="62.4333"
                y="55.0332"
                width="27.1333"
                height="36.3833"
                fill="white"
              />
              <path
                d="M75.7284 116.487C51.8548 116.487 32.4973 97.1293 32.4973 73.2557C32.4973 49.3821 51.8548 30.0246 75.7284 30.0246C99.6021 30.0246 118.96 49.3821 118.96 73.2557C118.96 97.1293 99.6021 116.487 75.7284 116.487ZM89.6338 72.5898L68.5586 57.2563C68.4431 57.1733 68.3069 57.1237 68.165 57.113C68.0232 57.1024 67.8811 57.131 67.7544 57.1959C67.6278 57.2607 67.5214 57.3592 67.4471 57.4805C67.3728 57.6018 67.3333 57.7413 67.3331 57.8835V88.5313C67.3326 88.6739 67.3717 88.8138 67.4458 88.9355C67.52 89.0573 67.6265 89.1561 67.7534 89.2211C67.8803 89.286 68.0227 89.3146 68.1648 89.3035C68.307 89.2925 68.4433 89.2423 68.5586 89.1586L89.6338 73.8347C89.7334 73.7643 89.8146 73.671 89.8707 73.5627C89.9267 73.4544 89.956 73.3342 89.956 73.2123C89.956 73.0903 89.9267 72.9701 89.8707 72.8618C89.8146 72.7535 89.7334 72.6603 89.6338 72.5898Z"
                fill="#49C7AB"
              />
              <defs>
                <filter
                  id="filter0_f_5_457"
                  x="0.900901"
                  y="0.900901"
                  width="150.198"
                  height="143.415"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.54955"
                    result="effect1_foregroundBlur_5_457"
                  />
                </filter>
                <filter
                  id="filter1_f_5_457"
                  x="15.0843"
                  y="14.4676"
                  width="121.215"
                  height="115.665"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.54955"
                    result="effect1_foregroundBlur_5_457"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoveryDelivered;
