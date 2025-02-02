import NextLink from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Button/Button'
import Link from '../Link/Link'
import Tag from '../Tag/Tag'

import styles from './Card.module.css'

const Card = ({
  image,
  tag,
  title,
  subtitle,
  text,
  list,
  price,
  priceText,
  priceOld,
  isOnly,
  isFree,
  isListHorizontal,
  button,
  href = '#',
  link
}) => {
  const { icon: buttonIcon, text: buttonText } = button || {}

  return (
    <div className={styles.card}>
      {tag && (
        <Tag className={styles.card_tag} href="#" color="orange">
          {tag}
        </Tag>
      )}

      <NextLink href={href} className={styles.card_image}>
        <Image src={image} alt="" fill />
      </NextLink>

      <div className={styles.card_body}>
        <div className={styles.card_content}>
          {title && (
            <h4 className={styles.card_title}>
              <NextLink href={href}>{title}</NextLink>
            </h4>
          )}

          {subtitle && (
            <p className={styles.card_title}>
              <strong>
                <NextLink href="#">{subtitle}</NextLink>
              </strong>
            </p>
          )}

          <p className={styles.card_trunc}>{text}</p>

          {list && (
            <ul
              className={`${styles.card_list} ${isListHorizontal ? styles['card_list--horizontal'] : ''}`}
            >
              {list.map(({ icon, text }, index) => (
                <li key={`list-item-${index}`}>
                  <FontAwesomeIcon icon={icon} />

                  {text}
                </li>
              ))}
            </ul>
          )}

          {isFree && <strong className={styles.card_free}>Free</strong>}

          {price && !isFree && (
            <div className={styles.card_price}>
              {isOnly && <span>Only</span>}

              {priceOld && <s>${priceOld.toFixed(2)}</s>}

              <strong>${price.toFixed(2)}</strong>

              {priceText && <span>{priceText}</span>}
            </div>
          )}

          {buttonText && (
            <Button href={href} isBlock>
              <>
                {buttonIcon && <FontAwesomeIcon icon={buttonIcon} />}

                <span>{buttonText}</span>
              </>
            </Button>
          )}

          {link && (
            <Link href={link.href}>
              <>
                <span>{link.text}</span> <FontAwesomeIcon icon={link.icon} />
              </>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
