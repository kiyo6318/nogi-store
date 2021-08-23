import styles from "../styles/thanks.module.css";
export default function Thanks() {
  return (
    <div className={styles.container}>
      <h1 className={styles.thanks_title}>
        お問い合わせ
        <br className={styles.u_sp} />
        ありがとうございました
      </h1>
    </div>
  );
}
