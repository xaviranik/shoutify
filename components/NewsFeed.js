import TrendingShouts from "./TrendingShouts";
import Sidebar from "./Sidebar";
import Shouts from "./Shouts";

const NewsFeed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 h-full md:overflow-y-hidden">
      <div className="col-span-1 order-last md:order-first">
        <Sidebar />
      </div>
      <div className="col-span-2 md:overflow-y-auto scrollbar-hide">
        <TrendingShouts />
        <Shouts />
      </div>
    </main>
  );
};

export default NewsFeed;
