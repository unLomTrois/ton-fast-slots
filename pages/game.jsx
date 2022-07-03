import styles from "./index.module.css";

import Head from "next/head";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { SlotMachine } from "../components/SlotMachine";

import { useState } from "react";

import BN from "bn.js";

export default function Game() {
  // ! bignumber
  const [balance, setBalance] = useState(0.222);

  // console.log(balance.toString(10))

  return (
    <Layout>
      <Head>
        <title>Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <SlotMachine></SlotMachine>
      </main>

      <footer className={styles.footer}>
        <h2 className={styles.footer__balance}>balance: {balance} TON</h2>
      </footer>
    </Layout>
  );
}
