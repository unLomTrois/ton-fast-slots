import styles from "./Layout.module.css"

export const Layout = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

