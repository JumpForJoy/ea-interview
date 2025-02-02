import Container from '../Container/Container'

import styles from './Section.module.css'

const Section = ({ children, bgColor, isCenter }) => (
  <section
    className={`${styles.section} ${bgColor ? styles[`section--${bgColor}`] : ''} ${isCenter ? styles['section--center'] : ''}`}
  >
    <Container>{children}</Container>
  </section>
)

export default Section
