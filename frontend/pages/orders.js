import React, { useEffect } from "react";
import instance from "../lib/instance";
import styles from "../styles/orders.module.css";

const Orders = ({ orders }) => {
  useEffect(() => {
    instance.get();
  });
  return (
    <div className={styles.container}>
      <h1>Orders</h1>
      <div className={styles.data_container}>
        {orders &&
          orders.map(function (item) {
            return (
              <div className={styles.product_card} key={item.id}>
                <p className={styles.name}>Заказ №{item.id}</p>
                <div className={styles.product_data}>
                  <p>Дата создания: {item.ordering_date}</p>
                  <p>Статус: {item.status.name}</p>
                  <p>Продукт: {item.product.name}</p>
                  <p>Находиться в локации {item.product.location}</p>
                  {item.robot ? (
                    <p>Доставляет {item.robot.model}</p>
                  ) : (
                    <>
                      <p>Робот не назначен</p>
                      <button>Назначить случайного</button>
                      <button>Назначить из списка</button>
                    </>
                  )}
                  {/* <p>В наличии {item.amount} шт.</p> */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  try {
    const data = await instance.get("/orders/");
    return { props: { orders: data.data } };
  } catch (error) {
    console.log(error);
    return { props: { products: null } };
  }
}
export default Orders;
