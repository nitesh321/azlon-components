import * as React from "react"
import styles from "./Button.css"
import {Loader} from "../Loader/Loader"
import classNames from "classnames";
interface Props {
  text: string
  size?:  'large'| 'normal'
  color?: 'danger' | 'info' | 'success' | 'default'
  isLoading?: boolean
  onClick?:any
}
export const Button =(props:Props) =>{
  const color_ =props.color || 'default'
  const size=props.size || "normal"

  return(
    <React.Fragment>
    <button
      type="submit"
      onClick={props.onClick}
      className={classNames(styles.button , styles[color_], styles[size],)}
    >
      {props.isLoading? <span><Loader/></span>:props.text}
    </button>
    </React.Fragment>
  )
}
