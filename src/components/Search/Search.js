import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import styles from './Search.module.css'

const Search = () => {
  return (
    <form className={styles.search}>
      <input placeholder="Search for anythings..." />

      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  )
}

export default Search
