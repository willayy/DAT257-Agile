import Link from 'next/link';
import styles from './header.module.css'; // Import the CSS module

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Brottkollen.se</h1>
      <nav className={styles.nav}>
        <ul className="flex gap-x-6">
        <li>
            <Link href="/pages/händelser">Händelser</Link>
          </li>
          <li>
            <Link href="/pages/visualisering">Visualisering</Link>
          </li>
          <li>
            <Link href="/pages/about">About</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}
