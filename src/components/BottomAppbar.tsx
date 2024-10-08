"use client";
import Link from "next/link";
import styles from "../styles/components/bottomcomponent.module.css";
import { useState } from "react";
import Image from "next/image";
export default function BottomAppbar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setIsActive] = useState('home');
  return (
    <aside className={`${styles["bottom-app-bar"]}`}>
      <ul className={`${styles["inner"]} `}>
        <li className={`${styles["icon-box"]} ${isActive === 'home' ? styles['active'] : ''}`}>
          <Link href={'/'}>
            <Image width={24} height={24} src="/img/icon/home-a.svg" alt="홈아이콘" />
            <span>홈</span>
          </Link>
        </li>
        <li className={`${styles["icon-box"]}`}>
          <Link href={'/'}>
            <Image width={24} height={24} src="/img/icon/foke.svg" alt="맛집공유아이콘" />
            <span>맛집공유</span>
          </Link>
        </li>
        <li className={`${styles["icon-box"]}`}>
          <Link href={'/'}>
            <Image width={24} height={24} src="/img/icon/search.svg" alt="검색아이콘" />
            <span>검색</span>
          </Link>
        </li>
        <li className={`${styles["icon-box"]}`}>
          <Link href={'/login'}>
            <Image width={24} height={24} src="/img/icon/people.svg" alt="마이페이지아이콘" />
            <span>로그인</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}