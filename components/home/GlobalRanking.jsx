import Image from 'next/image';

const globalRankingData = [
  {
    rank: 1,
    image: '/profile-picture.jpg',
    username: 'Taylor Swift',
    exp: 14700,
  },
  {
    rank: 2,
    image: '/profile-picture.jpg',
    username: 'Taylor Swift',
    exp: 14700,
  },
  {
    rank: 3,
    image: '/profile-picture.jpg',
    username: 'Taylor Swift',
    exp: 14700,
  },
  {
    rank: 4,
    image: '/profile-picture.jpg',
    username: 'Taylor Swift',
    exp: 14700,
  },
  {
    rank: 5,
    image: '/profile-picture.jpg',
    username: 'Taylor Swift',
    exp: 14700,
  },
];

const rankingUserColors = {
  1: '#FFF6AA',
  2: '#F0F6FF',
  3: '#FFC8A9',
};

function RankingUser({ userData }) {
  return (
    <div
      className="flex p-2 gap-2 items-center rounded-xl shadow-xl"
      style={{ backgroundColor: rankingUserColors[userData.rank] || '#FFF' }}
    >
      <p>
        {userData.rank}
        #
      </p>
      <Image
        alt={userData.username}
        src={userData.image}
        width={80}
        height={80}
        className="w-14 h-14 object-cover rounded-full border-white border-4"
      />
      <div>
        <h3 className="font-semibold">{userData.username}</h3>
        <p className=" text-sm">
          {userData.exp}
          XP
        </p>
      </div>
    </div>
  );
}

export function GlobalRanking() {
  return (
    <div className="max-w-xs mx-auto w-full">
      <h2 className="font-semibold text-center mb-4 text-lg">Global Ranking</h2>
      <div className="grid gap-3">
        {
          globalRankingData.map((user) => (
            <RankingUser userData={user} />
          ))
        }
      </div>
    </div>
  );
}
