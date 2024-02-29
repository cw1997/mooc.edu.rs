import Image from "next/image";
import styles from "./page.module.sass";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        www. <strong>M(assive) O(pen) O(nline) C(ourses)</strong> .edu.rs
      </h1>
      <div className={styles.description}>
        <p>
          A massive open online course (MOOC /muːk/) or an open online course is an online course aimed at unlimited participation and open access via the Web.
        </p>
      </div>
      <div className={styles.contact}>
        <p>
          Email: <a href="mailto:changwei1006@gmail.com">changwei1006@gmail.com</a> (Chang Wei 昌維)
        </p>
      </div>
    </div>
  );
}
