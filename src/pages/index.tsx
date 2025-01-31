import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

const Hero: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <Heading as="h1">{siteConfig.title}</Heading>
        <p className="font-semibold">{siteConfig.tagline}</p>
      </div>
    </header>
  );
};

const Home: React.FC = () => {
  return (
    <Layout description="시대생팀">
      <Hero />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
