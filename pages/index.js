import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Shoutify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* News feed */}

      {/* Footer */}
    </div>
  );
}
