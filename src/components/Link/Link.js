import NextLink from 'next/link'

import styles from './Link.module.css'

const Link = (props) => {
  return <NextLink {...props} className={styles.link} />
}

export default Link
