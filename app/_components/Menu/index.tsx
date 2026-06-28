// app\_components\Nenu\index.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./index.module.css";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        {/* <nav className={cx(styles.nav, isOpen && styles.open)}> */}
        <ul className={styles.items}>
          <li>
            <Link href="/news" className={styles.link} onClick={close}>
              ニュース
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link} onClick={close}>
              私たちについて
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link} onClick={close}>
              お問い合わせ
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className={`${styles.button} ${styles.close}`}
          onClick={close}
        >
          {/* <button
            className={cx(StyleSheet.button, styles.close)}
            onClick={close}
          /> */}
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button type="button" className={styles.button} onClick={open}>
        <Image src="/menu-dark.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
