import Button from "../../ui/Button/Button";
import { motion } from "motion/react";
const GetApp = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-teal-400/80 to-white/50">
      <div className="absolute inset-0 bg-[url('/getapp.gif')] bg-cover bg-center bg-no-repeat mix-blend-lighten"></div>

      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <motion.span
          className="text-lg font-medium text-gray-900 mb-4"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          SECURE ACCESS TO YOUR MEDICATIONS
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          Get Your Meds Online Today
        </motion.h2>

        <p className="max-w-2xl text-lg md:text-xl text-gray-800 mb-8">
          We have partnered with RX-Outreach to provide mail order medications
          at a fraction of the price you may find in your local pharmacy. Meet
          your chronic illness provider online today and get your medication
          delivered as quickly as 24 hours later.
        </p>

        <Button
          variant="primary"
          className="flex items-center gap-2 text-lg !bg-black hover:!bg-gray-900"
        >
          Get The App
          <span className="inline-block">→</span>
        </Button>
      </div>
    </div>
  );
};

export default GetApp;
