'use client'

import { useState } from 'react'

import styles from './Tabs.module.css'

const Tabs = ({ buttons = [], tabs = [] }) => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className={styles.tabs}>
      <header className={styles.tabs_header}>
        {buttons.map((label, index) => (
          <button
            key={`tab-trigger-${index}`}
            type="button"
            className={index === tabIndex ? 'active' : ''}
            onClick={() => setTabIndex(index)}
          >
            {label}
          </button>
        ))}
      </header>

      <div className={styles.tabs_body}>
        {tabs.map((tab, index) => (
          <div
            key={`tab-${index}`}
            className={`${styles.tabs_tab} ${index === tabIndex ? 'active' : ''}`}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
