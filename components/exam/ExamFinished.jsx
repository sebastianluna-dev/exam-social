import { ZoomIn } from '../Animations';
import { GlobalRanking } from '../home';
import { Result } from './Result';
import { Coments } from '../Coments';

export function ExamFinished({ questions, correctQuestions }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl mx-auto">
      <ZoomIn delay={0.6}>
        <GlobalRanking />
      </ZoomIn>
      <ZoomIn className="row-start-1 sm:col-start-2">
        <Result
          questions={questions}
          correctQuestions={correctQuestions}
        />
      </ZoomIn>
      <ZoomIn delay={1.2} className="sm:col-span-2 lg:col-span-1 max-w-lg mx-auto">
        <Coments />
      </ZoomIn>
    </div>
  );
}
