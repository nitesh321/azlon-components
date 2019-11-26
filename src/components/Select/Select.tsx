import * as React from "react"
import styles from "./Select.css"
interface item {
  name?: string,
  id?: string,

}
interface Props {
  defaultName?:string
  items: item[],
  action?:(value: any) =>{}
}

export const Select =(props:Props) =>{
  return (
    <select className={styles.select} onChange={props.action}>
      <option value="">{props.defaultName || 'Select'}</option>
      {props.items && props.items.map((item, index) =>{
        return <option value={item.id} key={index}>{item.name}</option>
      })}
    </select>

  )
}
