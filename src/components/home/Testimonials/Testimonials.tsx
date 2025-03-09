import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isHovering = useMotionValue(false);

  const testimonials = [
    {
      rating: 4,
      text: "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
      author: "Nicholas O.",
      image: " /test1.png",
    },
    {
      rating: 3,
      text: "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
      author: "Christine M.",
      image: " /test2.png",
    },
    {
      rating: 3,
      text: "If you need help, Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
      author: "Heather B.",
      image: " /test3.png",
    },
    {
      rating: 4,
      text: "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
      author: "Nicholas O.",
      image: " /test1.png",
    },
    {
      rating: 3,
      text: "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
      author: "Christine M.",
      image: " /test2.png",
    },
    {
      rating: 3,
      text: "If you need help, Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
      author: "Heather B.",
      image: " /test3.png",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div className="py-8 px-4 md:py-12 lg:py-16">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
          <div>
            <div className="text-emerald-500 mb-2 text-sm md:text-base font-medium tracking-wider">
              OUR CLIENT'S
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
              Testimonials
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              ref={prevRef}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#475569] flex items-center justify-center"
            >
              <span className="transform rotate-180">
                <FaArrowRight className="text-[#475569] text-sm md:text-base" />
              </span>
            </button>
            <button
              ref={nextRef}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center"
            >
              <FaArrowRight className="text-sm md:text-base" />
            </button>
          </div>
        </div>
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => isHovering.set(true)}
          onMouseLeave={() => isHovering.set(false)}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error handled
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error handled
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-container min-h-[400px] lg:h-[450px] h-fit"
          >
            {testimonials.map((testimonial, index) => {
              // @ts-expect-error handled
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const filterEffect = useTransform(
                [mouseX, isHovering],
                ([x, hovering]: [number, boolean]) => {
                  if (!hovering) return "blur(0px)";
                  const bounds = document
                    .getElementById(`testimonial-${index}`)
                    ?.getBoundingClientRect();
                  if (!bounds) return "blur(4px)";
                  return x >= bounds.left && x <= bounds.right
                    ? "blur(0px)"
                    : "blur(4px)";
                }
              );

              return (
                <SwiperSlide
                  className="z-[999] py-6 md:py-8 lg:py-10 px-3 md:px-4 lg:px-5 h-full"
                  key={index}
                >
                  <motion.div
                    className="bg-white rounded-lg z-[999] border border-[#E2E8F0] p-4 md:p-5 lg:p-6 shadow-sm h-full flex flex-col justify-between"
                    whileHover={{
                      scale: 1.05,
                      rotate: 3,
                      filter: "blur(0px)",
                      transition: { duration: 0.3 },
                    }}
                    initial={{ filter: "blur(0px)" }}
                    style={{ filter: filterEffect }}
                    id={`testimonial-${index}`}
                  >
                    <div>
                      <div className="flex gap-1 mb-3 md:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xl md:text-2xl ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-200"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="mb-4 text-gray-600 text-sm md:text-base leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                      />
                      <span className="font-medium text-sm md:text-base">
                        {testimonial.author}
                      </span>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
