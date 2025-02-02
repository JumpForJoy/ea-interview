import styles from './Label.module.css'

const Label = ({ children, color }) => (
  <span className={`${styles.label} ${color ? styles[`label--${color}`] : ''}`}>
    {children}
  </span>
)

export default Label
