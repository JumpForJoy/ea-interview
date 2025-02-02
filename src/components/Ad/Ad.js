import Image from 'next/image'

import Button from '../Button/Button'

import styles from './Ad.module.css'

const Ad = ({ image, href, text }) => (
  <div className={styles.ad}>
    <Image src={image} fill alt="" />

    <Button className={styles.ad_button} href={href} color="orange">
      {text}
    </Button>
  </div>
)

export default Ad
