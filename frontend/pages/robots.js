import React from 'react'
import styles from '../styles/robots.module.css'
import instance from '../lib/instance'

const Robots = ({robots}) => {
  return (
    <div className={styles.container}>
      <h1>Robots</h1>
      <div className={styles.data_container}>
        {robots &&
          robots.map(function (item) {
            return (
              <div className={styles.product_card} key={item.id}>
                <p className={styles.name}>{item.model}</p>
                <div className={styles.product_data}>
                  <p>ID: {item.id}</p>
                  <p>Статус {item.status.name}</p>
                  <p>Зарядка {item.charge}%</p>
                  <p>Местонахождение: area {item.area}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  try {
    const data = await instance.get("/robots/");
    console.log(data.data);
    return { props: { robots: data.data } };
  } catch (error) {
    console.log(error);
    return { props: { robots: null } };
  }
}

export default Robots