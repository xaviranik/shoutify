import Avatar from "../../components/Avatar";
import CurrentTrends from "../../components/CurrentTrends";

const ShoutDetails = () => {
  return (
    <section className="flex flex-col scroll-smooth min-h-screen">
      <div className="max-w-6xl w-full mx-auto mt-5 px-5 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          <div className="col-span-1 order-last md:order-first relative">
            <CurrentTrends />
            <div className="sticky top-28 mt-5">
              {/* Sticky sidebar goes here! */}
            </div>
          </div>
          <div className="col-span-2 scrollbar-hide">
            <div className="bg-white shadow-sm rounded-md p-5 md:p-7">
              Post content goes here!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoutDetails;
