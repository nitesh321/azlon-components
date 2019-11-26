import * as React from 'react';
import styles from "./Tooltip.css";
import classNames from "classnames";
export const Tooltip =(props:{children: React.ReactNode, text: string}) =>{
  return(
    <div className={styles.tooltip}>
      <div className={classNames(styles.tooltip, styles.triangle)}></div>
      <div className={styles.tooltipName}>{props.children}</div>
      <span className={styles.tooltipText}>{props.text}</span>
    </div>
  )
}
