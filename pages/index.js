import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
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
