import Image from 'next/image';
import { FilledStarIcon } from './Icons';

function Coment() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl">
      <div className="flex gap-2 items-start">
        <Image
          src="/profile-picture.jpg"
          alt="profile-picture"
          width={80}
          height={80}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div>
          <p className="font-semibold">Taylor Swift</p>
          <span>25,000 xp</span>
        </div>
      </div>
      <div className="flex">
        <FilledStarIcon />
        <FilledStarIcon />
        <FilledStarIcon />
        <FilledStarIcon />
        <FilledStarIcon />
      </div>
      <div className="font-light">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Nulla laoreet lacus nec
        volutpat gravida.
      </div>
    </div>
  );
}

export function Coments() {
  return (
    <div className="">
      <h2 className="mb-4 font-semibold text-center text-lg">Comments</h2>
      <div className="grid gap-4 lg:overflow-y-scroll lg:h-96 p-4 pt-0 scroll">
        <Coment />
        <Coment />
        <Coment />
      </div>
    </div>
  );
}
