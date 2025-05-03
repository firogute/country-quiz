import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "./assets/bg.jpg";

const questions = [
  {
    question: "Which country is Kuala Lumpur the capital?",
    options: ["Sweden", "Vietnam", "Malaysia", "Austria"],
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Osaka"],
  },
  {
    question: "Which country is Kuala Lumpur the capital?",
    options: ["Sweden", "Vietnam", "Malaysia", "Austria"],
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Osaka"],
  },
  {
    question: "Which country is Kuala Lumpur the capital?",
    options: ["Sweden", "Vietnam", "Malaysia", "Austria"],
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Osaka"],
  },
  {
    question: "Which country is Kuala Lumpur the capital?",
    options: ["Sweden", "Vietnam", "Malaysia", "Austria"],
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Osaka"],
  },
  {
    question: "Which country is Kuala Lumpur the capital?",
    options: ["Sweden", "Vietnam", "Malaysia", "Austria"],
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Osaka"],
  },
  // Add more questions as needed...
];
function App() {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center text-[#E2E4F3] vietnam-pro"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="quiz-container p-12 rounded-4xl w-full max-w-[64rem]">
          <header className="flex justify-between my-10 font-bold">
            <h1 className="text-2xl">Country Quiz</h1>
            <div className="result flex bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full px-4 py-2">
              <span>🏆</span>
              <p>8/10 Points</p>
            </div>
          </header>
          <div className="question-container bg-[#343964] py-16 px-3 rounded-2xl grid gap-8 justify-center">
            <div className="question-numbers">
              <ul className="flex gap-3 flex-wrap justify-center ">
                {questions.map((_, index) => (
                  <li
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`cursor-pointer ${
                      current === index ? "active" : ""
                    }`}
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="grid gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="question justify-self-center text-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>{questions[current].question}</p>
                  </motion.div>
                </div>
                <motion.div
                  className="answer-options grid sm:grid-cols-2 gap-7"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.4 }}
                >
                  {questions[current].options.map((option, i) => (
                    <button key={i}>{option}</button>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
