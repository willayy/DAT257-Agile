import Link from 'next/link';
import styles from './header.module.css'; // Import the CSS module
/**
 * displays the header of the entire application, links to the different pages
 * @returns an HTML header element
 */
export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Brottkollen.se</h1> 
      <nav className={styles.nav}>
        <ul className="flex gap-x-6">
        <li>
            <Link href="/">Händelser</Link>
          </li>
          <li>
            <Link href="/visualization">Visualisering</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
