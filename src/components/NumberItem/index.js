import styles from './NumberItem.module.css'
import cx from 'classnames'

export default function NumberItem({
  number,
  isHour,
  isMinute,
  isSecond
}) {


  const containerStyles = cx(styles.container, {
    [`${styles.isHour}`] : isHour,
    [`${styles.isMinute}`] : isMinute,
    [`${styles.isSecond}`] : isSecond,
  })

  return (
    <div
      className={containerStyles}
    >
      { number }
    </div>
  )
}
