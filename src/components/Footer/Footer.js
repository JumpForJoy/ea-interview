import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faXTwitter,
  faTiktok,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Label from '../Label/Label'

import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_content}>
      <Container className={styles['footer_content-inner']}>
        <aside className={styles.footer_aside}>
          <Logo />

          <Button isInverse={true}>Contact Sale</Button>
        </aside>

        <div className={styles.footer_nav}>
          <div className={styles.footer_links}>
            <h4>Categories</h4>

            <ul>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Marketing & Business</a>
              </li>
              <li>
                <a href="#">Writing</a>
              </li>
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Music & Audio</a>
              </li>
              <li>
                <a href="#">
                  Craft <Label color="yellow">SALE</Label>
                </a>
              </li>
              <li>
                <a href="#">Photography & Video</a>
              </li>
              <li>
                <a href="#">Web & App design</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer_links}>
            <h4>Lists</h4>

            <ul>
              <li>
                <a href="#">New courses</a>
              </li>
              <li>
                <a href="#">Top rated</a>
              </li>
              <li>
                <a href="#">Courses on sale</a>
              </li>
              <li>
                <a href="#">Course bundles</a>
              </li>
              <li>
                <a href="#">
                  Blog <Label color="green">POPULAR</Label>
                </a>
              </li>
              <li>
                <a href="#">
                  Ebooks <Label color="blue">NEW</Label>
                </a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer_links}>
            <h4>Company</h4>

            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">
                  Careers <Label color="pink">HIRING</Label>
                </a>
              </li>
              <li>
                <a href="#">Become a Teacher</a>
              </li>
              <li>
                <a href="#">Term of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Accessibillity</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer_links}>
            <h4>Feature</h4>

            <ul>
              <li>
                <a href="#">User Management</a>
              </li>
              <li>
                <a href="#">Learn Management</a>
              </li>
              <li>
                <a href="#">Reporting</a>
              </li>
              <li>
                <a href="#">Forums</a>
              </li>
              <li>
                <a href="#">Language</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>

    <div className={styles.footer_bar}>
      <Container className={styles['footer_bar-inner']}>
        <p className={styles.footer_copy}>
          @ 2024 <a href="#">Eduma</a>. All rights reserved
        </p>

        <div className={styles.footer_socials}>
          <p>Connect with us</p>

          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  </footer>
)

export default Footer
