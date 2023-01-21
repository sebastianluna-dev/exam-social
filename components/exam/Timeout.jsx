export function Timeout() {
  return (
    <div className="bg-white max-w-xs rounded-2xl shadow-xl mx-auto px-8 py-16 mt-8">
      <p>
        <span className="text-3xl font-semibold mb-4 block text-center">
          Timeout!
        </span>
        <span className="text-xl font-light text-center block">
          You haven&apos;t finished on time, but you can try many times as you want
        </span>
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <button className="bg-primary py-2 border-styles rounded-lg" type="button">
          Try again
        </button>
        <button className="bg-tertiary py-2 border-styles rounded-lg" type="button">
          Go home
        </button>
      </div>
    </div>
  );
}
