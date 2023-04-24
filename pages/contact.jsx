import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              aspernatur nisi illum perspiciatis consequuntur laboriosam, dolore
              ab? Facilis dolores minima velit. Consectetur dolor iste cumque
              veniam perspiciatis mollitia, porro corrupti!
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: cheorodio@gmail.com</li>
              <li className="contact-item">Phone: +6212344321007</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
