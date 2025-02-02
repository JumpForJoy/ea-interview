import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import {
  faFacebookF,
  faXTwitter,
  faYoutube,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

import Avatar from '../Avatar/Avatar'

import styles from './Member.module.css'

const socialsIcons = {
  facebook: faFacebookF,
  twitter: faXTwitter,
  youtube: faYoutube,
  linkedin: faLinkedinIn
}

const Member = ({ name, image, description, socials = {} }) => (
  <div className={styles.member}>
    <h4>
      <Link href="#">{name}</Link>
    </h4>

    <div className={styles.member_details}>
      <Avatar image={image} />

      <ul>
        <li>
          <FontAwesomeIcon icon={faUserGroup} /> 326 Students
        </li>

        <li>
          <FontAwesomeIcon icon={faFile} /> 20 Courses
        </li>
      </ul>
    </div>

    <p>{description}</p>

    <ul>
      {Object.keys(socials).map((social) => (
        <li key={`social-${social}`}>
          <a href={socials[social]}>
            <FontAwesomeIcon icon={socialsIcons[social]} />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Member
