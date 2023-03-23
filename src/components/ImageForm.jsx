const ImageForm = () => {
  return (
    <div className="m-3 mt-8">
      <form className="rounded-lg px-5 py-10 shadow-2xl input-bg-pattern">
        <div className="pb-6 text-center text-lg md:text-xl">
          <p className="pb-1">Our detective is ready to take new cases!</p>
          <p>Enter an image URL below to find some faces. 😉</p>
        </div>
        <label
          className="sr-only mb-2 text-sm font-bold text-gray-900"
          htmlFor="image-link"
        >
          Image Link
        </label>
        <div className="relative">
          <input
            className="block w-full rounded-lg border border-violet-300 bg-violet-50 p-4 text-sm text-purple-600 placeholder-violet-300 focus:ring-pink-500 focus:outline-pink-500 focus:border-pink-500"
            type="text"
            id="image-link"
            placeholder="Insert link"
          />
          <button
            className="absolute rounded-md bg-violet-400 px-4 py-2 text-sm font-medium font-bold uppercase text-white transition-colors duration-300 right-2.5 bottom-2.5 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-pink-300"
            type="submit"
          >
            Run Detector
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageForm;
