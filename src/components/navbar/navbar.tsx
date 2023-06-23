import Image from "next/image";
import styles from "@/components/navbar/navbar.module.css";
import Link from "next/link";

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/">
        <Image src="/ramboll.svg.png" alt="me" width="162" height="33" />
      </Link>
      <div>To do app</div>
    </header>
  );
}
