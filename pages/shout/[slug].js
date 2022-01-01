import { getShouts, getShoutDetails } from "../../services";
import CurrentTrends from "../../components/CurrentTrends";
import ShoutContent from "../../components/ShoutContent";
import { ProfileCard } from "../../components/ProfileCard";

const ShoutDetails = ({ shout }) => {
  return (
    <section className="flex flex-col scroll-smooth min-h-screen">
      <div className="max-w-6xl w-full mx-auto mt-5 px-5 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          <div className="col-span-1 order-last md:order-first relative">
            <CurrentTrends />
            <div className="sticky top-28 mt-5">
              <div className="bg-white shadow-sm rounded-md my-4 p-5 md:p-7 md:my-0 md:mr-6">
                <ProfileCard shout={shout} />
              </div>
            </div>
          </div>
          <div className="col-span-2 scrollbar-hide">
            <ShoutContent shout={shout} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoutDetails;

export async function getStaticProps({ params }) {
  const shout = await getShoutDetails(params.slug);
  return {
    props: { shout },
  };
}

export async function getStaticPaths() {
  const shouts = await getShouts();
  return {
    paths: shouts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
