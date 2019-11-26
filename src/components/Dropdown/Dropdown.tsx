import * as React from "react"
import styles from "./Dropdown.css"

interface dropdownContent {
  name?: string,
  link?: string,
  action?:()=>{},
  id?: string
}
interface Props {
  name: string
  items: dropdownContent[]
}

export const Dropdown =(props: Props) =>{
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>{props.name}</button>
      <div className={styles.dropdownContent}>
        {props.items && props.items.map((item, index)=>{
          return (
            <div key={index} onClick={item.action}>{item.name}</div>
          )
        })}
      </div>
    </div>
  )
}
