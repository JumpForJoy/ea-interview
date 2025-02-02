import Link from 'next/link'

import styles from './NavItem.module.css'

const NavItem = ({ text, href, icon, trimLeft }) => {
  const Content = (
    <>
      {text}
      {icon || null}
    </>
  )

  return (
    <div
      className={`${styles.nav_item} ${trimLeft ? styles['trim--left'] : ''}`}
    >
      {href ? <Link href={href}>{Content}</Link> : <div>{Content}</div>}
    </div>
  )
}

export default NavItem
