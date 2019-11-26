import * as React from "react";
import styles from "./List.css";
type item = {
  name?: string,
  onClick?:() =>{}
  data?:Object
}
interface Props {
  items: item[],
  children: React.ReactNode
}

export const List =(props:Props) =>{

  return(
    <div className={styles.parent}>
      <ul className={styles.list}>
        {props.items && props.items.map((item, index) =>{
          return <li className={styles.listItem} key={index} onClick={item.onClick}>{item.name}
          <div>{props.children}</div>
          </li>
        })}
      </ul>
    </div>
  )
}
