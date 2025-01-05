import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Authorization from '@/components/Layout/Authorization';

export default function Home() {
  return (
    <Authorization>
      <Head>
        <title>Next JS FE 20</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page}`}>
        <h1>product list</h1>
        <ul>
          <li>
            <Link href="/products/bag">Bag</Link>
          </li>
          <li>
            <Link href="/products/tshirt">Tshirt</Link>
          </li>
          <li>
            <Link href="/products/shoes">Shoes</Link>
          </li>
        </ul>
      </div>
    </Authorization>
  );
}
