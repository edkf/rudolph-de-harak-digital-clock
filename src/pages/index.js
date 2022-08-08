import  React, { useState , useEffect } from 'react'
import uuid from 'react-uuid'

import styles from '../styles/Home.module.css'
import NumberItem from '../components/NumberItem'

function hours12 (date) {
  return (date.getHours() + 24) % 12 || 12
}

export default function Home() {

  var [date,setDate] = useState(new Date())
  const getCurrentMinute = date.getMinutes()
  const getCurrentSecond = date.getSeconds()
    
  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  })

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div id="hour" className={styles.grid}>
          {[...Array(12)].map((x, i) =>
            <NumberItem
              number={i + 1}
              isHour={hours12(date) == (i + 1)}
              key={uuid()}
            />
          )}
        </div>
        <div id="minutes" className={styles.grid}>
          {[...Array(60)].map((x, i) =>
            <NumberItem
              number={i}
              isMinute={getCurrentMinute === i}
              isSecond={getCurrentSecond === i}
              key={uuid()}
        
              addZero
            />
          )}
        </div>
        {/* <div className={styles.about}>Reproduction of the digital clock created by Rudolph de Harak. Extension created by Edgard Kozlowski.</div> */}
      </div>
    </div>
  )
}
