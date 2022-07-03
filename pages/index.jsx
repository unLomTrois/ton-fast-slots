import styles from "./index.module.css";

import Head from "next/head";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { SlotMachine } from "../components/SlotMachine";

import { useState } from "react";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [key, setKey] = useState("");

  const oninput = (evt) => {
    setKey(evt.target.value);
  };

  const clickPlay = () => {
    // todo: fetch backend and check that key is correct
    const valid = true;

    if (!valid) {
      // todo: show error message "not valid game key"
    }
    // save game key to session
    sessionStorage.setItem("game_key", JSON.stringify(key));
    router.push('/game')
  };

  return (
    <Layout>
      <Head>
        <title>420hack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your game key"
          value={key}
          onInput={oninput}
        />
        <button
          className={styles.submit_button}
          type="submit"
          onClick={clickPlay}
        >
          Play!
        </button>
      </main>

      <footer className={styles.footer}>
        {/* <h2 className={styles.footer__balance}>balance: 0.1488 TON</h2> */}
      </footer>
    </Layout>
  );
}
