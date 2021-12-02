import styles from "./navbar.module.css";
import React, { useState, useEffect } from "react";
import logo from "../../images/industrial-robot-factory-svgrepo-com.svg";
import Image from "next/image";
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="Show"
          layout="fixed"
          width="70px"
          height="70px"
        />
        <p>
          Robotic <br /> Warehouse
        </p>
      </div>
      <div className={styles.pages}>
        <Link href="/orders"><a>Orders</a></Link>
        <Link href="/products"><a>Products</a></Link>
        <Link href="/warehouse"><a>Warehouse</a></Link>
        <Link href="/robots"><a>Robots</a></Link>
      </div>
      <div className={styles.profile}>
        <button>Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
