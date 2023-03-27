const Entries = ({ name, numOfEntries}) => {
  return (
    <div className="text-violet-600 text-xl md:text-2xl my-8">
      {name}, your current entry count is...{" "}
      <span className="font-bold text-3xl md:text-4xl text-white">
        {numOfEntries}
      </span>
    </div>
  );
};

export default Entries;
