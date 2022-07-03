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
    const key = sessionStorage.getItem("game_key");
    setGameKey(key);

    console.log(key, gamekey);

    if (key == undefined) {
      router.replace("/");
    }
  }, [gamekey]);

  // todo: bignumber
  const [balance, setBalance] = useState(0.123);

  return (
    <Layout>
      <Head>
        <title>Game</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.cryptofonts.com/1.4.0/cryptofont.css"
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <SlotMachine></SlotMachine>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wallet_card}>
        { /* todo: copy address */ }
          <p className={styles.wallet_card__id}>your wallet: EQCAe8p18bYfHZvf-T3EW-sBtpkYuuoPPk_zES8IOELiF_Sa</p>
        </div>
        <h2 className={styles.footer__balance}>your balance: {balance} TON</h2>
      </footer>
    </Layout>
  );
}
