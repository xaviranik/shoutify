import Head from "next/head";
import Header from "../components/Header";
import NewsFeed from "../components/NewsFeed";
import { getShouts } from "../services";

export default function Home({ shouts }) {
  return (
    <div className="flex flex-col bg-slate-50 md:h-screen md:overflow-y-hidden scroll-smooth">
      <div className="max-w-6xl w-full mx-auto mt-5 px-5 xl:px-0 h-full overflow-y-hidden">
        <NewsFeed shouts={shouts} />
      </div>

      {/* Footer */}
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
