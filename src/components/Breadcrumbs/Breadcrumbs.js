import { Fragment } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Container from '../Container/Container'

import styles from './Breadcrumbs.module.css'

const Breadcrumbs = ({ className = '', crumbs = [] }) => (
  <div className={`${styles.breadcrumbs} ${className}`}>
    <Container>
      <ul>
        {crumbs.map(({ href, label }, index) => (
          <Fragment key={`breadcrumb-link-${index}`}>
            <li>{href ? <Link href={href}>{label}</Link> : label}</li>

            {index < crumbs.length - 1 && (
              <li>
                <FontAwesomeIcon icon={faAngleRight} />
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </Container>
  </div>
)

export default Breadcrumbs
