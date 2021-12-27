import NewsFeed from "../components/NewsFeed";
import { getShouts } from "../services";

export default function Home({ shouts }) {
  return (
    <div className="flex flex-col scroll-smooth">
      <div className="max-w-6xl w-full mx-auto mt-5 px-5 xl:px-0">
        <NewsFeed shouts={shouts} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const shouts = (await getShouts()) || [];

  return {
    props: {
      shouts,
    },
  };
}
