import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{ textShadow: "2px 2px 4px #000000"}}>
          Scala Advent of Code by
          <a href="https://scala.epfl.ch/">
            <img className={styles.scalacenter} alt="Scala Center" src={useBaseUrl('/img/scala-center.png')} title="Scala Center"/>
          </a>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={`${styles.button} button button--secondary button--lg`}
            to="/2021/">
            2021
          </Link>
          <Link
            className={`${styles.button} button button--secondary button--lg`}
            to="/2022/">
            2022
          </Link>
          <Link
            className={`${styles.button} button button--secondary button--lg`}
            to="/2023/">
            2023
          </Link>
          <Link
            className={`${styles.button} button button--secondary button--lg`}
            to="/2024/">
            2024
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Scala advent of code by the scala center">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
