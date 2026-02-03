import Container from '@/components/Container/Container';
import css from './Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={css.main}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.wrapperLeft}>
            <h1 className={css.title}>
              Unlock your potential with the best <span className={css.accent}>language</span>{' '}
              tutors
            </h1>
            <p className={css.text}>
              Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your
              language proficiency to new heights by connecting with highly qualified and
              experienced tutors.
            </p>
            <Link href="/teachers" className={css.button}>
              Get started
            </Link>
          </div>
          <div className={css.wrapperRight}>
            <Image
              src="/human.png"
              alt="Girl near laptop"
              width="339"
              height="339"
              className={css.imageHuman}
            />
            <Image
              src="/laptop.png"
              alt="Macbook laptop"
              width="339"
              height="171"
              className={css.imageLaptop}
            />
          </div>
        </div>
        <ul className={css.lowerList}>
          <li className={css.lowerItem}>
            <span className={css.lowerNumber}>32,000 +</span>
            <span className={css.lowerText}>Experienced tutors</span>
          </li>
          <li className={css.lowerItem}>
            <span className={css.lowerNumber}>300,000 +</span>
            <span className={css.lowerText}>5-star tutor reviews</span>
          </li>
          <li className={css.lowerItem}>
            <span className={css.lowerNumber}>120 +</span>
            <span className={css.lowerText}>Subjects taught</span>
          </li>
          <li className={css.lowerItem}>
            <span className={css.lowerNumber}>200 +</span>
            <span className={css.lowerText}>Tutor nationalities</span>
          </li>
        </ul>
      </Container>
    </main>
  );
}
