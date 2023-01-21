import { SmallLoader } from '../Loader';

export function Result({ questions, correctQuestions }) {
  return (
    <>
      <h2 className="text-center font-semibold mb-4 text-lg">Results</h2>
      <div className="px-8 py-16 flex flex-col justify-center gap-4 max-w-xs w-full bg-white rounded-2xl shadow-xl mx-auto">
        <div className="flex justify-center">
          <SmallLoader
            questions={questions}
            correctQuestions={correctQuestions}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Nulla laoreet lacus nec volutpat
          gravida.d adaw da wd awd wa dw d
          dawdaw dad daw d d awd wd wd dwdwawd
        </p>
      </div>
    </>
  );
}
