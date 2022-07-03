import styles from "./index.module.css";

import Head from "next/head";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { SlotMachine } from "../components/SlotMachine";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import BN from "bn.js";

export default function Game() {
  const router = useRouter();
  const [gamekey, setGameKey] = useState();

  // runs after component did mount
  useEffect(() => {
    // todo: validate game key on server side
    const key = sessionStorage.getItem("game_key")
    setGameKey(key)

    console.log(key, gamekey)

    if (key == undefined) {
      router.replace("/");
    }
  }, [gamekey]);

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
