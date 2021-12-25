import Head from "next/head";
import Header from "../components/Header";
import NewsFeed from "../components/NewsFeed";

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-50 md:h-screen md:overflow-y-hidden scroll-smooth">
      <Head>
        <title>Shoutify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="max-w-6xl w-full m-5 mx-auto px-5 xl:px-0 h-full overflow-y-hidden">
        <NewsFeed />
      </div>

      {/* Footer */}
    </div>
  );
}
