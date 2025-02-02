import Image from 'next/image'

import styles from './Extra.module.css'

const Extra = ({ title, text }) => (
  <div className={styles.extra}>
    <Image src="/badge.svg" width={39} height={39} alt="" />

    {title && <h3>{title}</h3>}

    {text && <p>{text}</p>}
  </div>
)

export default Extra
