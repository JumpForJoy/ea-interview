import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import styles from './Rating.module.css'

const Rating = ({ children }) => (
  <div className={styles.rating}>
    <header className={styles.rating_header}>
      <strong>0</strong>

      <figure>
        <ul>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>

          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>

          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>

          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>

          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
        </ul>

        <p>0 rating</p>
      </figure>
    </header>

    <div className={styles.rating_body}>
      <ul>
        <li>
          <strong>5</strong>

          <span>0%</span>

          <div className={styles.rating_bar}>
            <span></span>
          </div>
        </li>

        <li>
          <strong>4</strong>

          <span>0%</span>

          <div className={styles.rating_bar}>
            <span></span>
          </div>
        </li>

        <li>
          <strong>3</strong>

          <span>0%</span>

          <div className={styles.rating_bar}>
            <span></span>
          </div>
        </li>

        <li>
          <strong>2</strong>

          <span>0%</span>

          <div className={styles.rating_bar}>
            <span></span>
          </div>
        </li>

        <li>
          <strong>1</strong>

          <span>0%</span>

          <div className={styles.rating_bar}>
            <span></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
)

export default Rating
