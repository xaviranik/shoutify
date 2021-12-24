import TrendingShouts from "./TrendingShouts";
import Sidebar from "./Sidebar";

const NewsFeed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2">
        <TrendingShouts />
      </div>
      <div className="col-span-1">
        <Sidebar />
      </div>
    </main>
  );
};

export default NewsFeed;
