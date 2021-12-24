import Head from "next/head";
import Header from "../components/Header";
import NewsFeed from "../components/NewsFeed";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Shoutify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <div className="max-w-6xl mx-auto">
        {/* News feed */}
        <NewsFeed />
      </div>

      {/* Footer */}
    </div>
  );
}
