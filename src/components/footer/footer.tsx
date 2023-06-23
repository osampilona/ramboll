import styles from "@/components/footer/footer.module.css";
import Image from "next/image";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Image
        src="/copyright-symbol.svg"
        alt="copyright"
        width="24"
        height="24"
      />
      <div className={styles.company}>
        <p>Ramboll A/S</p>
        <p>2023</p>
      </div>
    </div>
  );
}
