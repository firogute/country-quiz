import React from "react";
import { motion } from "framer-motion";
import congrats from "../assets/congrats.png";

const CompletePage = ({ score, totalQuestions, onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="question-container bg-[#343964] py-16 px-3 rounded-2xl grid gap-8 justify-center">
        <div className="flex flex-col items-center gap-8">
          <img src={congrats} alt="congrats" className="w-40 h-40" />
          <h2 className="text-3xl font-bold text-[#E2E4F3]">
            Congrats! You completed the quiz.
          </h2>
          <div className="result bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full px-8 py-4 inline-block">
            <p className="text-2xl text-white">
              You answered {score}/{totalQuestions} correctly
            </p>
          </div>
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-[#E65895] to-[#BC6BE8] hover:from-[#d84f8a] hover:to-[#ab5fd6] transition-colors px-8 py-4 rounded-xl text-lg text-white font-medium"
          >
            Play again
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CompletePage;
