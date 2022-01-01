const CurrentTrends = () => {
  return (
    <div className="bg-white shadow-sm rounded-md my-4 p-5 md:p-7 md:my-0 md:mr-6">
      <div className="flex items-center justify-between">
        <span className="text-slate-900 text-base md:text-md font-thin capitalize">
          Current Trends
        </span>
        <span className="text-slate-300 text-sm md:text-md cursor-pointer hover:underline">
          See all
        </span>
      </div>

      <div className="flex flex-wrap items-center mt-4">
        <span className="trend-pill">#tech</span>
        <span className="trend-pill">#lifehacks</span>
        <span className="trend-pill">#stock</span>
        <span className="trend-pill">#spiderman</span>
        <span className="trend-pill">#productivity</span>
      </div>
    </div>
  );
};

export default CurrentTrends;
