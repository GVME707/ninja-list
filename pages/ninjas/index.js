import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import styles from "@/styles/ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

export default function NinjasHome({ ninjas }) {
  return (
    <>
      <Head>
        <title>Ninjalist | Listing</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Listing</h1>
        {ninjas.map((ninjas) => (
          <Link href={"/ninjas/" + ninjas.id} key={ninjas.id}>
            <div className={styles.single}>
              <h3>{ninjas.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
