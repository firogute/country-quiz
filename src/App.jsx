import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckIcon from "./assets/Check_round_fill.svg";
import CrossIcon from "./assets/Close_round_fill.svg";
import bgImage from "./assets/bg.jpg";

function App() {
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const fetchQuestion = async () => {
    try {
      const response = await fetch(
        "https://the-trivia-api.com/v2/questions?limit=10&categories=geography"
      );
      const data = await response.json();

      const formattedQuestions = data.map((item) => ({
        question: item.question.text,
        options: [item.correctAnswer, ...item.incorrectAnswers].sort(
          () => Math.random() - 0.5
        ),
        correctAnswer: item.correctAnswer,
      }));

      setQuestions(formattedQuestions);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === questions[current].correctAnswer;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      { questionIndex: current, selectedOption, isCorrect },
    ]);

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((prevCurrent) => prevCurrent + 1);
      }
    }, 700);
  };

  const currentQuestionAnswered = userAnswers.some(
    (answer) => answer.questionIndex === current
  );

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center text-[#E2E4F3] vietnam-pro"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="quiz-container p-12 rounded-4xl w-full max-w-[64rem]">
          <header className="flex justify-between my-10 font-bold flex-wrap">
            <h1 className="text-2xl">Country Quiz</h1>
            <div className="result flex bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full px-4 py-2 gap-2">
              <span>🏆</span>
              <p>{score}/10 Points</p>
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
                    } ${userAnswers[index] ? "active" : ""}`}
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
                <div className="question justify-self-center text-xl text-center">
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
                  {questions[current].options.map((option, i) => {
                    const isCorrectAnswer =
                      option === questions[current].correctAnswer;
                    const userAnswer = userAnswers.find(
                      (a) => a.questionIndex === current
                    );
                    const isSelected = userAnswer?.selectedOption === option;
                    const showCorrectIcon =
                      currentQuestionAnswered && isCorrectAnswer;
                    const showIncorrectIcon = isSelected && !isCorrectAnswer;

                    return (
                      <button
                        key={i}
                        onClick={() => handleAnswer(option)}
                        disabled={currentQuestionAnswered}
                        className={`text-left transition-colors px-5 py-4 rounded-xl ${
                          currentQuestionAnswered
                            ? isCorrectAnswer
                              ? "bg-green-600"
                              : isSelected
                              ? "bg-red-600"
                              : "bg-[#4F5D75]"
                            : "bg-[#4F5D75] hover:bg-[#5c6a94]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {(showCorrectIcon ||
                            showIncorrectIcon ||
                            isSelected) && (
                            <img
                              src={
                                showCorrectIcon ||
                                (isSelected && isCorrectAnswer)
                                  ? CheckIcon
                                  : CrossIcon
                              }
                              alt={isCorrectAnswer ? "Correct" : "Incorrect"}
                              className="w-5 h-5"
                            />
                          )}
                          {option}
                        </div>
                      </button>
                    );
                  })}
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
