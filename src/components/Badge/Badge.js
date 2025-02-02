import styles from './Badge.module.css'

const Badge = ({ className = '', children }) => (
  <span className={`${styles.badge} ${className}`}>{children}</span>
)

export default Badge
