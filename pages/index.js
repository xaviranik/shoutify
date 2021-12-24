import Head from "next/head";
import Header from "../components/Header";
import NewsFeed from "../components/NewsFeed";

export default function Home() {
  return (
    <div className="bg-slate-50 h-screen overflow-y-auto">
      <Head>
        <title>Shoutify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="max-w-6xl m-5 mx-auto px-5 xl:px-0">
        <NewsFeed />
      </div>

      {/* Footer */}
    </div>
  );
}
