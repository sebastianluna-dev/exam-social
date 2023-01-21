import Image from 'next/image';

export function CreateExam() {
  return (
    <div className="relative pt-60 px-4 md:px-8 lg:px-4 xl:px-8 pb-8 rounded-xl overflow-hidden">
      <Image
        alt="user with a computer"
        className="object-cover"
        src="/create-exam.jpg"
        fill
      />
      <p className="font-black text-4xl relative text-white leading-none  ">
        Share your own exams with the community
      </p>
      <button className="bg-tertiary relative px-3 py-2 rounded-lg mt-4" type="button">
        Add an exam
      </button>
    </div>
  );
}
