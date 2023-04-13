import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Link from "next/link";
import styles from '@/styles/home.module.css'
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>
        Ninjalist | Home
      </title>
      <meta name="keywords" content="ninjas" />
    </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Est dolore et consectetur ex mollit.</p>
        <p className={styles.text}>
          Excepteur reprehenderit nostrud reprehenderit Lorem eu sit aliqua
          voluptate laborum laborum do fugiat. Pariatur veniam aute eu officia.
          Officia mollit labore consequat consequat aute ut sunt ad do minim ea.
          Minim id ad voluptate magna dolore pariatur mollit minim ullamco duis
          nisi ex. Laboris cillum occaecat minim proident nulla. Consectetur
          officia excepteur enim aliqua ullamco in laboris do consectetur ipsum
          minim nulla. Culpa cupidatat amet ad ex fugiat pariatur consectetur.
        </p>
        <Link href="/ninjas" className={styles.btn}>see ninja listing</Link>
      </div>
    </>
  );
}
