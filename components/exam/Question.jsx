import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ButtonAnimation } from '../Animations';

function Option({ optionData, selectAnswer, disabled }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClickAnswer = () => {
    if (!disabled) {
      setIsSelected(true);
      selectAnswer(optionData.isCorrect);
    }
  };
  return (
    <ButtonAnimation>
      <div
        aria-hidden="true"
        className={`
        flex p-2 gap-4 items-center rounded-full border-styles cursor-pointer duration-300 
        ${Boolean(optionData.isCorrect && isSelected) && ' bg-cyan-300'}
        ${Boolean(!optionData.isCorrect && isSelected) && ' bg-rose-500 '}
        ${Boolean(!isSelected && !disabled) && ' hover:bg-teal-100'}
      `}
        onClick={handleClickAnswer}
      >
        <div className="h-8 w-8 rounded-full border-styles bg-white" />
        {optionData.answer}
      </div>
    </ButtonAnimation>
  );
}

export function Question({
  questionData, nextQuestion, setAnswer, index,
}) {
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  useEffect(() => {
    if (isAnswerSelected) {
      setTimeout(nextQuestion, 1000);
    }
  }, [isAnswerSelected]);

  const selectAnswer = (result) => {
    setAnswer(result, index);
    setIsAnswerSelected(true);
  };
  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -150, opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 max-w-xs w-full bg-white rounded-2xl shadow-xl mx-auto"
    >
      <h2 className="mb-8">{questionData.question}</h2>
      <div className="grid gap-3">
        {
          questionData.options.map((optionData) => (
            <Option
              optionData={optionData}
              selectAnswer={selectAnswer}
              disabled={isAnswerSelected}
            />
          ))
        }
      </div>
      <div className="flex justify-center mt-8">
        <ButtonAnimation>
          <button
            className="bg-primary px-3 py-2 rounded-full border-styles"
            onClick={() => selectAnswer(false)}
            type="button"
          >
            Skip Question
          </button>
        </ButtonAnimation>
      </div>
    </motion.div>
  );
}
