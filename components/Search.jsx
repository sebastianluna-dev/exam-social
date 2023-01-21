import { SearchIcon } from './Icons';

export function Search() {
  return (
    <div
      style={{ gridTemplateColumns: '28px 1fr 90px' }}
      className="grid bg-white items-center border-styles rounded-full p-1 gap-1"
    >
      <SearchIcon />
      <input className="focus:outline-none" type="text" placeholder="Find an exam" />
      <button className="bg-primary hover:bg-tertiary duration-200 px-3 py-2 border-styles rounded-full text-lg" type="button">
        Search
      </button>
    </div>
  );
}
