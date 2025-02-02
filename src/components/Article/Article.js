import styles from './Article.module.css'

const Article = ({ children }) => (
  <div className={styles.article}>{children}</div>
)

export default Article
