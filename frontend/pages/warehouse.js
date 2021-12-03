import React from "react";
import styles from "../styles/warehouse.module.css";

const Warehouse = () => {
  const zone2 = [
    { num: 19, loc: [8, 9], lines: [0, 1, 0, 0] },
    { num: 18, loc: [0], lines: [0, 0, 1, 0] },
    { num: 17, loc: [6, 7], lines: [0, 1, 0, 0] },
    { num: 16, loc: [0], lines: [0, 0, 1, 0] },
    { num: 15, loc: [5], lines: [0, 1, 0, 0] },
    { num: 14, loc: [0], lines: [0, 0, 1, 0] },
    { num: 10, loc: [0], lines: [0, 1, 0, 0] },
    { num: 9, loc: [0], lines: [0, 0, 1, 0] },
    { num: 20, loc: [1, 2, 3, 4], lines: [0, 1, 0, 0] },
    { num: 1, loc: [0], lines: [0, 0, 1, 0] },
  ];

  const zone1 = [
    { num: 13, loc: [17], lines: [0, 0, 1, 0] },
    { num: 12, loc: [18], lines: [0, 0, 0, 0] },
    { num: 11, loc: [0], lines: [0, 1, 0, 1] },
  ];

  const zone3 = [
    { num: 8, loc: [14], lines: [0, 1, 0, 0] },
    { num: 7, loc: [15], lines: [0, 0, 0, 0] },
    { num: 2, loc: [0], lines: [0, 0, 1, 1] },
    { num: 6, loc: [12, 13], lines: [0, 1, 0, 0] },
    { num: 3, loc: [0], lines: [0, 1, 1, 0] },
    { num: 4, loc: [10, 11], lines: [0, 0, 0, 0] },
  ];
  const zone4 = [{ num: 5, loc: [16], lines: [0, 0, 0, 0] }];

  return (
    <div className={styles.container}>
      <div>
      <h1>Warehouse structure</h1>
        <p>
          0 Переходный пункт <br />
          1 Процессоры
          <br />
          2 Материнские платы
          <br />
          3 Видеокарты
          <br />
          4 Оперативная память
          <br />
          5 Корпуса
          <br />
          6 Блоки питания
          <br />
          7 Системы охлаждения
          <br />
          8 SSD
          <br />
          9 HDD
          <br />
          10 Звуковые карты
          <br />
          11 Сетевые карты
          <br />
          12 Гарнитура
          <br />
          13 USB устройства
          <br />
          14 ПК
          <br />
          15 Ноутбуки
          <br />
          16 Зона выдачи
          <br />
          17 Зарядки
          <br />
          18 Сортировочный центр
          <br />
        </p>
      </div>
      

      <div className={styles.content_container}>
        <div className={styles.zone1}>
          <div></div>
          {zone1.map(function (item) {
            return (
              <>
                <div className={styles.area}>
                  <p className={styles.num}>area {item.num}</p>
                  <p className={styles.content}>
                    locations: <br />
                    {item.loc.map(function (item) {
                      if (!item) return <>↕</>;
                      return <>{item}, </>;
                    })}
                  </p>
                  {Boolean(item.lines[0]) && (
                    <div className={styles.line_top}></div>
                  )}
                  {Boolean(item.lines[1]) && (
                    <div className={styles.line_right}></div>
                  )}
                  {Boolean(item.lines[2]) && (
                    <div className={styles.line_bottom}></div>
                  )}
                  {Boolean(item.lines[3]) && (
                    <div className={styles.line_left}></div>
                  )}
                </div>
              </>
            );
          })}
        </div>

        <div className={styles.zone2}>
          {zone2.map(function (item) {
            return (
              <>
                <div className={styles.area}>
                  <p className={styles.num}>area {item.num}</p>
                  <p className={styles.content}>
                    locations: <br />
                    {item.loc.map(function (item) {
                      if (!item) return <>↕</>;
                      return <>{item}, </>;
                    })}
                  </p>
                  {Boolean(item.lines[0]) && (
                    <div className={styles.line_top}></div>
                  )}
                  {Boolean(item.lines[1]) && (
                    <div className={styles.line_right}></div>
                  )}
                  {Boolean(item.lines[2]) && (
                    <div className={styles.line_bottom}></div>
                  )}
                  {Boolean(item.lines[3]) && (
                    <div className={styles.line_left}></div>
                  )}
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.zone3}>
          {zone3.map(function (item) {
            // if(!item) return <div></div>
            return (
              <>
                {item.num == 6 && <div></div>}
                {item.num == 4 && (
                  <>
                    <div></div> <div></div>
                  </>
                )}
                <div className={styles.area}>
                  <p className={styles.num}>area {item.num}</p>
                  <p className={styles.content}>
                    locations: <br />
                    {item.loc.map(function (item) {
                      if (!item) return <>↕</>;
                      return <>{item}, </>;
                    })}
                  </p>
                  {Boolean(item.lines[0]) && (
                    <div className={styles.line_top}></div>
                  )}
                  {Boolean(item.lines[1]) && (
                    <div className={styles.line_right}></div>
                  )}
                  {Boolean(item.lines[2]) && (
                    <div className={styles.line_bottom}></div>
                  )}
                  {Boolean(item.lines[3]) && (
                    <div className={styles.line_left}></div>
                  )}
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.zone4}>
          {zone4.map(function (item) {
            return (
              <>
                <div className={styles.area}>
                  <p className={styles.num}>area {item.num}</p>
                  <p className={styles.content}>
                    locations: <br />
                    {item.loc.map(function (item) {
                      return <>{item} </>;
                    })}
                  </p>
                  {Boolean(item.lines[0]) && (
                    <div className={styles.line_top}></div>
                  )}
                  {Boolean(item.lines[1]) && (
                    <div className={styles.line_right}></div>
                  )}
                  {Boolean(item.lines[2]) && (
                    <div className={styles.line_bottom}></div>
                  )}
                  {Boolean(item.lines[3]) && (
                    <div className={styles.line_left}></div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Warehouse;
