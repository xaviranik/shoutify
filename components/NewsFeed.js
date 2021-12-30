import TrendingShouts from "./TrendingShouts";
import Sidebar from "./Sidebar";
import Shouts from "./Shouts";
import CurrentTrends from "./CurrentTrends";

const NewsFeed = ({ shouts }) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 h-full">
      <div className="col-span-1 order-last md:order-first relative">
        <CurrentTrends />
        <div className="sticky top-28 mt-5">
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
