import styles from "../styles/Contact.module.css";
import Head from "next/head";
import MediaQuery from "react-responsive";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <form
        name="contact"
        action="/thanks"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <div className={styles.form_style}>
          <p className={styles.title}>お問い合わせ</p>
          {/* <div className={styles.tmp_info}>
            <p>nogi store</p>
            <p>contact@nogistore.net</p>
          </div>
          <p className={styles.title}>お問い合わせフォーム　※準備中</p> */}
          <label className={styles.name} htmlFor="name">
            <span>お名前</span>
            <input type="text" name="name" placeholder="禾乃アイ" />
          </label>

          <label className={styles.kana} htmlFor="kana">
            <span>ふりがな</span>
            <input type="text" name="kana" placeholder="のぎのあい" />
          </label>

          <label className={styles.mail} htmlFor="mail">
            <span>メールアドレス</span>
            <input type="email" name="email" placeholder="xxxxx@xxx.com" />
          </label>

          <label className={styles.tel} htmlFor="tel">
            <span>電話番号</span>
            <input type="tel" name="tel" placeholder="09012345678" />
          </label>

          <label className={styles.zip_code}>
            <input type="hidden" className="p-country-name" value="Japan" />
            <span>郵便番号</span>
            <input
              type="text"
              name="zip_code"
              className="p-postal-code"
              size="8"
              maxLength="8"
              placeholder="123456"
            />
          </label>
          <label className={styles.address}>
            <span>ご住所</span>
            <input
              type="text"
              name="location"
              className="p-region p-locality p-street-address p-extended-address"
              placeholder="xx県xx市xxxx123-4"
            />
          </label>
          <textarea
            name="detail"
            className={styles.textarea}
            rows="15"
            cols="100"
            placeholder="お問い合わせ内容"
          ></textarea>
          <label className={styles.button_wrapper}>
            <button type="submit" className={styles.submit}>
              送信
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}
