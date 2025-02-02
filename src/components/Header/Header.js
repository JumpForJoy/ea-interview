import NextLink from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import Container from '../Container/Container'
import Button from '../Button/Button'
import Link from '../Link/Link'
import Bar from '../Bar/Bar'
import Logo from '../Logo/Logo'
import Dropdown from '../Dropdown/Dropdown'
import Search from '../Search/Search'
import Nav from '../Nav/Nav'

import styles from './Header.module.css'

const Header = () => (
  <header className={styles.header}>
    <Bar>
      <p>
        Special welcome gift. Get 30% off your first purchase with code “Eduma”.{' '}
        <NextLink href="#">
          <strong>Find out more!</strong>
        </NextLink>
      </p>
    </Bar>

    <Container>
      <div className={styles.header_inner}>
        <div className={styles.header_content}>
          <Logo />

          <Dropdown
            label="Categories"
            list={[
              { label: 'Coaching', href: '#' },
              { label: 'Online Business', href: '#' },
              { label: 'Passive Income', href: '#' },
              { label: 'Photography', href: '#' },
              { label: 'Teacher Training', href: '#' },
              { label: 'Teaching Online', href: '#' },
              { label: 'Technology', href: '#' },
              { label: 'Video Creation', href: '#' }
            ]}
          />

          <div className={styles.header_search}>
            <Search />
          </div>
        </div>

        <div className={styles.header_nav}>
          <Nav
            items={[
              { label: 'Home', href: '#', trimLeft: true },
              {
                label: 'Courses',
                href: '#',
                list: [
                  { label: 'Courses Grid', href: '#' },
                  { label: 'Courses Grid 2 Columns', href: '#' },
                  { label: 'Courses List', href: '#' },
                  { label: 'Courses Load More', href: '#' },
                  { label: 'Courses Infinite Scroll', href: '#' },
                  { label: 'Offline Course', href: '#', badge: 'NEW' }
                ]
              },
              {
                label: 'Pages',
                href: '#',
                list: [
                  { label: 'Landing Page for Online Course', href: '#' },
                  { label: 'Landing Page for Offline Course', href: '#' },
                  { label: 'Instructors', href: '#' },
                  { label: 'Portfolio Masonry', href: '#' },
                  { label: 'Portfolio Masonry 2', href: '#' },
                  { label: 'Gallery', href: '#' },
                  { label: 'FAQs', href: '#' },
                  { label: 'Shop', href: '#' },
                  { label: 'About Us', href: '#' },
                  { label: 'Contact', href: '#' },
                  { label: 'Terms & Conditions', href: '#' }
                ]
              },
              { label: 'Events', href: '#' },
              {
                label: 'Blog',
                href: '#',
                list: [
                  { label: 'Blog Grid', href: '#' },
                  { label: 'Blog List', href: '#' },
                  { label: 'Blog Load More', href: '#' },
                  { label: 'Blog Infinite Scroll', href: '#' }
                ]
              },
              { label: 'Become an Instructor', href: '#' },
              { label: 'Backend Demo', href: '#' }
            ]}
          />

          <div className={styles.header_actions}>
            <Button href="#">Get Started</Button>

            <Link href="#">
              <FontAwesomeIcon icon={faUser} />

              <span>Log In</span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </header>
)

export default Header
