import Dropdown from '../Dropdown/Dropdown'

import styles from './Nav.module.css'

const Nav = ({ items }) => {
  return (
    items &&
    Array.isArray(items) && (
      <nav className={styles.nav}>
        <ul>
          {items.map((item, index) => (
            <li key={`nav-item-${index}`}>
              <Dropdown {...item} />
            </li>
          ))}
        </ul>
      </nav>
    )
  )
}

export default Nav
