import Image from 'next/image'

import Container from '../Container/Container'
import Button from '../Button/Button'

import styles from './Banner.module.css'

const Banner = ({
  image,
  title,
  text,
  buttons,
  color,
  showApps,
  useH1Size
}) => {
  return (
    <div
      className={`${styles.banner} ${color ? styles[`banner--${color}`] : ''}`}
    >
      <Container>
        <div className={styles.banner_body}>
          <Image className={styles.banner_image} src={image} fill alt="" />

          <div className={styles.banner_content}>
            <h2 className={useH1Size ? styles['banner--h1'] : ''}>{title}</h2>

            <p>{text}</p>

            {(buttons || showApps) && (
              <div className={styles.banner_actions}>
                {buttons ? (
                  buttons.map((button, index) => (
                    <Button key={`banner-button-${index}`} {...button} />
                  ))
                ) : (
                  <>
                    <button type="button">
                      <Image
                        src="/google-play.webp"
                        width={175}
                        height={44}
                        alt=""
                      />
                    </button>

                    <button type="button">
                      <Image
                        src="/app-store.webp"
                        width={175}
                        height={44}
                        alt=""
                      />
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
