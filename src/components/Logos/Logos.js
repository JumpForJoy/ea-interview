import Image from 'next/image'

import styles from './Logos.module.css'

const Logos = ({ logos }) => (
  <ul className={styles.logos}>
    {logos.map((logo, index) => (
      <li key={`logo-${index}`}>
        <Image src={logo} alt="" />
      </li>
    ))}
  </ul>
)

export default Logos
