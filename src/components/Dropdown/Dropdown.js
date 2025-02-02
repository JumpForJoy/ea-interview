import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import NavItem from '../Nav/NavItem'
import Badge from '../Badge/Badge'

import styles from './Dropdown.module.css'

const Dropdown = ({ label, href, list, trimLeft }) => {
  const isDropdown = list && Array.isArray(list)

  return (
    <div className={styles.dropdown}>
      <NavItem
        text={label}
        href={href}
        icon={isDropdown && <FontAwesomeIcon icon={faAngleDown} />}
        trimLeft
      />

      {isDropdown && (
        <ul>
          {list.map(({ label, href, badge }, index) => (
            <li key={`dropdown-item-${index}`}>
              <Link href={href}>
                {label}
                {badge && <Badge className={styles.dropdown_badge}>{badge}</Badge>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
