import React, { useEffect } from 'react'
import instance from '../lib/instance'
import styles from '../styles/orders.module.css'

const Orders = () => {
  useEffect(() => {
    instance.get()
  })
  return (
    <div className={styles.container}>
      <div className={styles.circles}>
      </div>
     
    </div>
  )
}
export default Orders