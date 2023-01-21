import Link from 'next/link';
import { ListIcon, MathIcon } from '../Icons';
import { SmallLoader } from '../Loader';

function ExamResolved({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-xl">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="bg-tertiary w-10 h-10 p-1 flex items-center justify-center rounded-md border-styles">
          <MathIcon />
        </div>
        <div>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">{data.name}</h2>
          <p className="font-light sm:text-lg md:text-xl">{data.creator}</p>
        </div>
      </div>
      <div className="flex justify-center scale-75 sm:scale-100 -my-4 sm:my-0">
        <SmallLoader
          questions={data.questions}
          correctQuestions={data.correctQuestions}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 mt-4">
        <Link href="/exam">
          <button className="bg-tertiary py-2 border-styles text-sm sm:text-base rounded-lg w-full" type="button">
            Try again
          </button>
        </Link>
        <button className="w-full bg-primary py-2 border-styles text-sm sm:text-base rounded-lg" type="button">
          Review
        </button>
      </div>
      {data.assigment}
    </div>
  );
}

export function LastExamsResolved({ data }) {
  return (
    <div>
      <div className="flex items-end justify-between mb-4">
        <p className="text-2xl font-semibold">Last exams resolved</p>
        <button type="button" className="flex items-center gap-2 bg-white py-2 px-3 shadow-xl rounded-lg">
          <p>View all</p>
          <ListIcon />
        </button>
      </div>
      <div className="grid items-start grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {
        data.map((examData) => (
          <ExamResolved data={examData} />
        ))
      }
      </div>
    </div>
  );
}
