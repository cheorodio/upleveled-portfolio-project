import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              My name is Michelle Orodio. I'm originally from the Philippines
              but have lived in four different countries: Philippines, the UK,
              China and Austria. I'm currently based in Vienna, Austria.
            </p>
            <p className="description">
              I'm currently learning web development at UpLeveled.
            </p>
            <Link href="/portfolio" className="portfolio-link">
              View projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
