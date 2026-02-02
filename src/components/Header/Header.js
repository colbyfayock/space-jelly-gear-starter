import Link from 'next/link';
import dynamic from 'next/dynamic';
import Container from '@components/Container';

import styles from './Header.module.scss';

const FaShoppingCart = dynamic(() => import('react-icons/fa').then(mod => mod.FaShoppingCart), { ssr: false });

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>Space Jelly</a>
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <Link href="#">
              <a>Link</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Link</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Link</a>
            </Link>
          </li>
        </ul>
        <p className={styles.headerCart}>
          <button suppressHydrationWarning>
            <span suppressHydrationWarning><FaShoppingCart /></span>
            <span suppressHydrationWarning>
              $0.00
            </span>
          </button>
        </p>
        <ul className={styles.headerLocales}>
          <li>
            <Link href="#">
              <a suppressHydrationWarning>
                ES
              </a>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header;