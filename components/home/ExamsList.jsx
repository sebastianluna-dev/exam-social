import Link from 'next/link';
import { ButtonAnimation } from '../Animations';
import { ListIcon, ExamIcon, StartIcon } from '../Icons';

function ExamCard() {
  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl text-center">
      <div className="flex justify-center mb-2">
        <ExamIcon />
      </div>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">
        Fisioterapia 1
      </h2>
      <p className="mb-2 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla laoreet lacus nec
        volutpat gravida.
      </p>
      <div className="flex justify-center">
        <ButtonAnimation>
          <Link href="/exam">
            <button
              className="flex gap-2 items-center border-styles p-1 rounded-full"
              type="button"
            >
              <StartIcon />
              <span className="text-sm">
                Get started
              </span>
            </button>
          </Link>
        </ButtonAnimation>
      </div>
    </div>
  );
}

export function ExamsList({ data, title }) {
  return (
    <>
      <div className="flex items-end justify-between mb-4">
        <p className="text-2xl font-semibold">{title}</p>
        <button type="button" className="flex items-center gap-2 bg-white py-2 px-3 shadow-xl rounded-lg">
          <p>View all</p>
          <ListIcon />
        </button>
      </div>
      <div className="grid items-start grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {
        data.map((examData) => (
          <ExamCard data={examData} />
        ))
      }
      </div>
    </>
  );
}
