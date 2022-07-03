import Head from "next/head";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>sasha vasyanov Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <p className="header__title">Ton Fast Slots</p>
      </header>

      <main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          laudantium omnis obcaecati quaerat. Veniam, vitae. Doloremque
          perspiciatis cupiditate unde amet.
        </p>
      </main>

      <footer></footer>
    </Layout>
  );
}
