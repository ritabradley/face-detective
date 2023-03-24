const ImageForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <form className="rounded-lg px-5 py-10 shadow-2xl input-bg-pattern">
      <div className="pb-6 text-lg md:text-xl">
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
          className="block w-full rounded-lg border border-violet-300 bg-violet-50 p-4 text-sm text-purple-600 placeholder-violet-300 focus:ring-pink-500 focus:border-pink-500"
          type="text"
          id="image-link"
          placeholder="Insert link"
          onChange={onInputChange}
        />
        <button
          className="btn-primary absolute right-2.5 bottom-2.5"
          type="submit"
          onClick={onButtonSubmit}
        >
          Run Detector
        </button>
      </div>
    </form>
  );
};

export default ImageForm;
