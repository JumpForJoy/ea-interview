import Image from 'next/image'

import Avatar from '../Avatar/Avatar'

import styles from './Testimonial.module.css'

const Testimonial = ({ text, name, position, avatar }) => (
  <div className={styles.testimonial}>
    <div className={styles.testimonial_content}>
      <Image className={styles.testimonial_quotes} src="/quotes.svg" width={60} height={60} alt="" />

      <p>{text}</p>

      <p className={styles.testimonial_meta}>
        - {name} / {position}
      </p>
    </div>

    <div className={styles.testimonial_avatar}>
      <Avatar image={avatar} />
    </div>
  </div>
)

export default Testimonial
