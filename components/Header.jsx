import styles from './Header.module.css'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}><Link href="/"> Ton Fast Slots</Link></h1>
    </header>
  );
};
