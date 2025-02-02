import styles from './Grid.module.css'

const Grid = ({ cols, children }) => (
  <div className={`${styles.grid} ${cols ? styles[`grid--${cols}`] : ''}`}>
    {children}
  </div>
)

export default Grid
