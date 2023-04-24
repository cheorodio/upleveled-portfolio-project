import Head from 'next/head';
import Navbar from '../components/Navbar';

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
              My name is Michelle Orodio. I was born in the Philippines, and now
              living in Vienna Austria. I'm currently learning web development
              at UpLeveled.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
