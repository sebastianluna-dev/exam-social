import { useState, useEffect } from 'react';

export function Loader({ questions, correctQuestions }) {
  const [gradientState, setGradientState] = useState(false);
  const percentage = Math.ceil((correctQuestions / questions) * 100);
  useEffect(() => {
    setTimeout(() => {
      setGradientState(true);
    }, 1000);
  }, []);

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="320px"
        height="320px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          className="circle duration-1000"
          style={{ strokeDashoffset: gradientState ? (100 - percentage) * 8.8 : 880 }}
          cx="160"
          cy="160"
          r="140"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center ">
        <p className="text-6xl font-black">
          {percentage}
          %
        </p>
        <p className="text-2xl font-light">
          {correctQuestions}
          /
          {questions}
        </p>
      </div>
    </div>
  );
}

export function SmallLoader({ questions, correctQuestions }) {
  const [gradientState, setGradientState] = useState(false);
  const percentage = Math.ceil((correctQuestions / questions) * 100);
  useEffect(() => {
    setTimeout(() => {
      setGradientState(true);
    }, 1000);
  }, []);
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColorSmall">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          className="small-circle duration-1000"
          style={{ strokeDashoffset: gradientState ? (100 - percentage) * 4.72 : 472 }}
          cx="80"
          cy="80"
          r="70"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center ">
        <p className="text-3xl font-black">
          {percentage}
          %
        </p>
        <p className="">
          {correctQuestions}
          /
          {questions}
        </p>
      </div>
    </div>
  );
}
