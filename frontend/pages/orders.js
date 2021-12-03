import React, { useEffect, useState } from "react";
import instance from "../lib/instance";
import styles from "../styles/orders.module.css";

const Orders = ({ _orders }) => {
  const [robot, setRobot] = useState(null);
  const [order, setOrder] = useState(null);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    console.log(_orders)
    setOrders(_orders);
  }, [])

  useEffect(() => {
    if (order){ 
      instance.post('/set-robot/', JSON.stringify({"order_id": order}));
      setOrder(null)
      instance.get("/orders/").then((requset) => {
        setOrders(requset.data);
      }).catch((error) => {
        console.log(error);
      })
    }
      
  }, [order]);
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
                    <p>Доставляет {item.robot.id} модели {item.robot.model}</p>
                  ) : (
                    <>
                      <p>Робот не назначен</p>
                      <button onClick={() => setOrder(item.id)}>Начать сборку</button>
                      {/* <button>Назначить из списка</button> */}
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
    return { props: { _orders: data.data } };
  } catch (error) {
    console.log(error);
    return { props: { _orders: null } };
  }
}
export default Orders;
