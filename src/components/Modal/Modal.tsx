import * as React from 'react';
import styles from "./Modal.css";
import classNames from "classnames";
export const Modal =(props:{children: React.ReactNode, name: string, visibility:boolean, openModal:()=>{}, closeModal:()=>{}}) =>{
  const visibility = props.visibility ===true? 'show': 'hide';
  return(
    <React.Fragment>
      <button className={styles.open} onClick={() =>{
        props.openModal()
      }}>{props.name}</button>
      <div
        className={classNames(styles.modal, styles[visibility]
        )}
      >
        <div className={styles.modalContent}>
          <button className={styles.close} onClick={() =>{props.closeModal()}}>&times;</button>
          <div className={styles.content}>{props.children}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
