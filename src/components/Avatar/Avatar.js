import Image from 'next/image'

import styles from './Avatar.module.css'

const Avatar = ({ image }) => (
  <div className={styles.avatar}>
    <Image src={image} fill alt="" />
  </div>
)

export default Avatar
