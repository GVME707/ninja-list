import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/home.module.css";
import Head from "next/head";

const NotFound = () => {
  const [count, setCount] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000); // decrement the count every 1 second

    // when count reaches 0, redirect to the home page
    if (count === 0) {
      clearInterval(timer);
      router.push("/");
    }

    // clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [count, router]);

  return (
    <>
      <Head>
        <title>Ninjalist | 404</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>Ooops...</h1>
        <h2>That page cannot be found :(</h2>
        <p>
          Go back to the <Link href="/">Homepage</Link>
        </p>
        <p className="">Redirecting to the home page in {count} seconds...</p>
      </div>
    </>
  );
};

export default NotFound;
