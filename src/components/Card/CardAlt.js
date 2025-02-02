import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Button/Button'
import Tag from '../Tag/Tag'

import styles from './CardAlt.module.css'

const CardAlt = ({ className = '', tag, image, list, price, button }) => {
  const { href: buttonHref, icon: buttonIcon, text: buttonText } = button || {}

  return (
    <div className={`${styles.card} ${className}`}>
      {tag && (
        <Tag className={styles.card_tag} href="#">
          {tag}
        </Tag>
      )}

      <div className={styles.card_image}>
        <Image src={image} alt="" fill />
      </div>

      <div className={styles.card_body}>
        {price && (
          <div className={styles.card_price}>
            <strong>${price.toFixed(2)}</strong>
          </div>
        )}

        {buttonText && (
          <Button href={buttonHref} isBlock>
            <>
              {buttonIcon && <FontAwesomeIcon icon={buttonIcon} />}

              <span>{buttonText}</span>
            </>
          </Button>
        )}

        {list && (
          <ul className={styles.card_list}>
            {list.map(({ icon, text }, index) => (
              <li key={`list-item-${index}`}>
                <FontAwesomeIcon icon={icon} />

                {text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default CardAlt
