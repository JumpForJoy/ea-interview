import Link from 'next/link'

import styles from './Tag.module.css'

const Tag = ({ className = '', href, color, children }) => (
  <div
    className={`${styles.tag} ${className} ${color ? styles[`tag--${color}`] : ''}`}
  >
    {href ? <Link href={href}>{children}</Link> : children}
  </div>
)

export default Tag
