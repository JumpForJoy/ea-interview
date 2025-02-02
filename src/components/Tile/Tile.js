import Image from 'next/image'

import styles from './Tile.module.css'

const Tile = ({ image, title, text }) => (
  <a href="#" className={styles.tile}>
    <div className={styles.tile_image}>
      <Image src={image} alt="" fill />
    </div>

    <div className={styles.tile_content}>
      {title && <h4>{title}</h4>}

      {text && <p>{text}</p>}
    </div>
  </a>
)

export default Tile
