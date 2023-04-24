import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import mypic from '../public/hero-img.png';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 data-cy="homePageTitle" className="title">
              Hi there!
            </h1>
            <p className="description">
              My name is Michelle and I am currently learning web development at
              UpLeveled in Vienna, Austria.
            </p>

            <Link href="/contact" className="cta">
              Contact me
            </Link>
          </div>

          <div className="image-wrapper">
            <Image
              src={mypic}
              alt="illustration of a girl"
              width="200px"
              height="150px"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
