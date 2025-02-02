import Link from 'next/link'

import styles from './Button.module.css'

const Button = ({
  className = '',
  href,
  color,
  isInverse,
  isBlock,
  ...rest
}) => {
  const commonProps = {
    ...rest,
    href,
    className: `${styles.button} ${isInverse ? styles['button--inverse'] : ''} ${isBlock ? styles['button--block'] : ''} ${className} ${color ? styles[`button--${color}`] : ''}`
  }

  return href ? (
    <Link {...commonProps} />
  ) : (
    <button type="button" {...commonProps} />
  )
}

export default Button
