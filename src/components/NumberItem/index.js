import React, { useEffect, useRef } from 'react'
import fitty from 'fitty'

import styles from './NumberItem.module.css'
import cx from 'classnames'

export default function NumberItem({
  number,
  isHour,
  isMinute,
  isSecond,
  addZero,
}) {
  const containerStyles = cx(styles.container, {
    [`${styles.isHour}`]: isHour,
    [`${styles.isMinute}`]: isMinute,
    [`${styles.isSecond}`]: isSecond,
  })

  const title = useRef(null)

  return (
    <div className={containerStyles} ref={title}>
      {addZero ? ('0' + number).slice(-2) : number}
    </div>
  )
}
