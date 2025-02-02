import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from '../Link/Link'

import styles from './Title.module.css'

const Title = ({ title, subtitle, link, heading = 'h2' }) => {
  const Heading = heading
  const { href, label, icon } = link || {}

  return (
    <div className={styles.title}>
      <div className={`${styles.title_heading} title`}>
        <Heading>{title}</Heading>

        {href && (
          <Link href={href}>
            <span>{label}</span> {icon && <FontAwesomeIcon icon={icon} />}
          </Link>
        )}
      </div>

      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default Title
