import Image from 'next/image';
import { TimekeeperIcon } from '../Icons';
import { Search } from '../Search';

export function Hero() {
  return (
    <div className="px-4">
      <div className="max-w-2xl lg:max-w-6xl mx-auto lg:mt-16">
        <div className="grid lg:grid-cols-2">
          <div className="lg:col-start-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
              <span className="text-secondary">Lorem </span>
              ipsum
              <br />
              dolor
              <span className="text-secondary"> sit amet,</span>
              <br />
              consectetur
            </h1>
            <p className="text-2xl font-light mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla laoreet lacus nec volutpat gravida.
            </p>
            <Search />
            <div className="mt-4 flex-col sm:flex-row items-start sm:items-center flex ">
              <div className="flex">
                <Image
                  alt="user profile"
                  className="h-10 w-10 object-cover rounded-full border-4 border-white"
                  src="/profile-picture.jpg"
                  width={48}
                  height={48}
                />
                <Image
                  alt="user profile"
                  className="h-10 w-10 object-cover rounded-full -ml-3 border-4 border-white"
                  src="/profile-picture.jpg"
                  width={48}
                  height={48}
                />
                <Image
                  alt="user profile"
                  className="h-10 w-10 object-cover rounded-full -ml-3 border-4 border-white"
                  src="/profile-picture.jpg"
                  width={48}
                  height={48}
                />
                <Image
                  alt="user profile"
                  className="h-10 w-10 object-cover rounded-full -ml-3 border-4 border-white"
                  src="/profile-picture.jpg"
                  width={48}
                  height={48}
                />
              </div>
              <p className="text-xl font-light">
                <span className="font-black text-secondary">+500 </span>
                users are studing wiht us
              </p>
            </div>
          </div>
          <div className="relative h-60 lg:h-96 row-start-1 lg:col-start-2 mb-8">
            <Image
              alt="woman using computer"
              src="/home-1.png"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 text-lg sm:text-xl font-light mt-24 sm:mt-32">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col items-center max-w-xs mx-auto">
            <TimekeeperIcon color="#FF005C" />
            <p className="mt-2">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nulla laoreet lacus nec volutpat
              gravida.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col items-center max-w-xs mx-auto">
            <TimekeeperIcon color="#FF005C" />
            <p className="mt-2">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nulla laoreet lacus nec volutpat
              gravida.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col items-center max-w-xs mx-auto">
            <TimekeeperIcon color="#FF005C" />
            <p className="mt-2">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nulla laoreet lacus nec volutpat
              gravida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
