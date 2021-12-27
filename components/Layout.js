import Head from "next/head";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Shoutify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-slate-50">{children}</main>
    </>
  );
};

export default Layout;
