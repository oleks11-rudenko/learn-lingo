import Link from 'next/link';
import Container from '../Container/Container';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <Container paddings={128}>
        <div className={css.wrapper}>
          <Link href="/" className={css.logoLink}>
            {/* <svg className={css.logoIcon} width="" height="">
            <use href=""></use>
          </svg> */}
            LearnLingo
          </Link>
          <nav className={css.nav}>
            <ul className={css.navList}>
              <li className={css.navItem}>
                <Link href="/" className={css.navLink}>
                  Home
                </Link>
              </li>
              <li className={css.navItem}>
                <Link href="/teachers" className={css.navLink}>
                  Teachers
                </Link>
              </li>
            </ul>
          </nav>
          <AuthNavigation />
        </div>
      </Container>
    </header>
  );
}
