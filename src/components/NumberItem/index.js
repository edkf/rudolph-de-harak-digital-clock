import styles from './NumberItem.module.css'
import cx from 'classnames'

export default function NumberItem({
  number,
  isHour,
  isMinute,
  isSecond,
  addZero
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
      {
        addZero ? ('0' + number).slice(-2) : number
      }
    </div>
  )
}
