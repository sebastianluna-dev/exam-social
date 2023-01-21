import { AnimatePresence } from 'framer-motion';
import { Timer } from './Timer';
import { Question } from './Question';

export function Exam({
  setIsTimeout,
  isExamFinished,
  ExamData,
  nextQuestion,
  setAnswer,
  activeQuestion,
}) {
  return (
    <div>
      <Timer
        setIsTimeout={setIsTimeout}
        stop={isExamFinished}
      />
      <AnimatePresence mode="wait">
        {
          ExamData.map((questionData, index) => (
            activeQuestion === index
            && (
            <Question
              key={questionData.question}
              index={index}
              questionData={questionData}
              nextQuestion={nextQuestion}
              setAnswer={setAnswer}
            />
            )
          ))
        }
      </AnimatePresence>
    </div>
  );
}
