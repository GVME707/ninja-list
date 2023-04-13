import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
    <Head>
      <title>
        Ninjalist | Home
      </title>
      <meta name="keywords" content="ninjas" />
    </Head>
      <nav>
        <div className="logo">
          <Image src="/undraw_cat_epte.svg" width={128} height={77} />
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Listing</Link>
      </nav>
    </>
  );
};

export default NavBar;
