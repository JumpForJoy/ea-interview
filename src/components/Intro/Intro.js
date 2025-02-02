import Image from 'next/image'

import Button from '../Button/Button'

import styles from './Intro.module.css'

const Intro = ({ children, image, actions }) => (
  <div className={styles.intro}>
    <div className={styles.intro_content}>
      {children}

      {actions && (
        <div className={styles.intro_actions}>
          {actions.map((action, index) => (
            <Button key={`intro-button-${index}`} {...action} />
          ))}
        </div>
      )}
    </div>

    <figure className={styles.intro_image}>
      <Image src={image} alt="" />
    </figure>
  </div>
)

export default Intro
