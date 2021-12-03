import React from "react";
import styles from "../styles/warehouse.module.css";

const Warehouse = () => {
  const zone2 = [
    { num: 19, loc: [8, 9], lines: [0,1,0,0] },
    { num: 18, loc: [0], lines: [0,0,1,0] },
    { num: 17, loc: [6, 7], lines: [0,0,0,0] },
    { num: 16, loc: [0], lines: [0,0,0,0] },
    { num: 15, loc: [5], lines: [0,0,0,0] },
    { num: 14, loc: [0], lines: [0,0,0,0] },
    { num: 10, loc: [0], lines: [0,0,0,0] },
    { num: 9, loc: [0], lines: [0,0,0,0] },
    { num: 20, loc: [1,2,3,4], lines: [0,0,0,0] },
    { num: 1, loc: [0], lines: [0,0,0,0] },
  ];

  return (
    <div className={styles.container}>
      <h1>Warehouse structure</h1>
      <div className={styles.content_container}>
        <div className={styles.zone1}></div>

        <div className={styles.zone2}>
          {zone2.map(function (item) {
            return (
              <>
              <div className={styles.area}>
                <p className={styles.num}>area {item.num}</p>
                <p className={styles.content}> locations: <br/> {item.loc.map(function (item) {
                  return <>{item}, </>
                })}</p>
                {Boolean(item.lines[0]) && <div className={styles.line_top}></div>}
                {Boolean(item.lines[1]) && <div className={styles.line_right}></div>}
                {Boolean(item.lines[2]) && <div className={styles.line_bottom}></div>}
                {Boolean(item.lines[3]) && <div className={styles.line_left}></div>}
              </div>
              
              </>
            );
          })}
        </div>
        <div className={styles.zone3}></div>
        <div className={styles.zone4}></div>
      </div>
    </div>
  );
};
export default Warehouse;
