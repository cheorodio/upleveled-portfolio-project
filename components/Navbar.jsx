import Link from 'next/link';
import { withRouter } from 'next/router';
import Image from 'next/image';
import navImg from '../public/logo.png';

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/', dataCy: 'homePageLink' },
    { text: 'About', href: '/about', dataCy: 'aboutPageLink' },
    { text: 'Portfolio', href: '/portfolio', dataCy: 'portfolioPageLink' },
    { text: 'Contact', href: '/contact', dataCy: 'contactPageLink' },
    // { text: '', href: '' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          <Image src={navImg} alt="m logo" width="10px" height="10px" />
        </Link>

        <ul className="nav-links">
          {navs.map((nav) => (
            <li data-cy={nav.dataCy} key={`nav-${nav.href}`}>
              <Link
                href={nav.href}
                className={`nav-item ${
                  router.pathname === String(nav.href) ? 'active' : ''
                }`}
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
