import TrendingShouts from "./TrendingShouts";
import Sidebar from "./Sidebar";
import Shouts from "./Shouts";

const NewsFeed = ({ shouts }) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 h-full">
      <div className="col-span-1 order-last md:order-first relative">
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
            <span className="trend-pill">#productivity</span>
            <span className="trend-pill">#quantum_mechanics</span>
          </div>
        </div>
        <div className="sticky top-28 mt-4">
          <Sidebar />
        </div>
      </div>
      <div className="col-span-2 scrollbar-hide">
        <TrendingShouts />
        <Shouts shouts={shouts} />
      </div>
    </main>
  );
};

export default NewsFeed;
