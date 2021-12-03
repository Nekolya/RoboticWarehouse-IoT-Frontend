import React, { useEffect, useState } from "react";
import styles from "../styles/products.module.css";
import instance from "../lib/instance";

const Products = ({ products }) => {
  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <div className={styles.data_container}>
        {products &&
          products.map(function (item) {
            return (
              <div className={styles.product_card} key={item.id}>
                <p className={styles.name}>{item.name}</p>
                <div className={styles.product_data}>
                  <p>Цена: {item.cost} р.</p>
                  <p>Категория: {item.category.name}</p>
                  <p>Находиться в локации {item.location}</p>
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
    const data = await instance.get("/products/");
    return { props: { products: data.data } };
  } catch (error) {
    console.log(error);
    return { props: { products: null } };
  }
}
export default Products;
