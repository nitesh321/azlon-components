import * as React from "react"
import styles from "./Loader.css"


export const Loader =() =>{
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
