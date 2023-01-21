import { Loader, SmallLoader } from '../Loader';

export function Features() {
  return (
    <div className="grid lg:grid-cols-3 gap-8 mt-16 lg:mt-48 px-4 sm:px-16">
      <div className="grid max-w-lg mx-auto">
        <div className="shadow-xl bg-white rounded-2xl p-8 text-xl font-light self-center w-4/5 justify-self-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="shadow-xl bg-white rounded-2xl p-8 text-xl font-light self-center w-4/5 justify-self-start mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="shadow-xl bg-white rounded-2xl p-8 text-xl font-light self-center w-4/5 justify-self-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="hidden sm:flex lg:hidden xl:flex items-center justify-center">
        <Loader questions={24} correctQuestions={16} />
      </div>
      <div className="flex justify-center sm:hidden lg:flex xl:hidden items-center">
        <SmallLoader questions={24} correctQuestions={16} />
      </div>
      <div className="grid max-w-lg mx-auto">
        <div className="shadow-xl bg-white rounded-2xl p-8 text-xl font-light self-center w-4/5 justify-self-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="shadow-xl bg-white rounded-2xl p-8 text-xl font-light self-center w-4/5 justify-self-end mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="shadow-xl bg-white rounded-2xl p-8 text-xl font-light self-center w-4/5 justify-self-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
}
