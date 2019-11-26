import * as React from "react";
import styles from "./Box.css"
interface Props {
  children?:React.ReactNode
  styles?: Object
}
export const Box =(props: Props) =>{
  return(
    <div className={styles.container} style={props.styles}>
      {props.children}
    </div>
  )
}
