import Head from "next/head";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";

import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>sasha vasyanov Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          laudantium omnis obcaecati quaerat. Veniam, vitae. Doloremque
          perspiciatis cupiditate unde amet.
        </p> */}
      </main>

      <footer className={styles.footer}>
        <h2 className={styles.footer__balance}>balance: 0.1488 TON</h2>
      </footer>
    </Layout>
  );
}
