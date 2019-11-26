import * as React from "react";
import styles from "./Input.css"
import classnames from 'classnames';

interface Props {
  placeholder?: string,
  type?: string,
  id?:string
  name?:string
  size?:   'medium' | 'large' | 'default'
  color?: 'danger' | 'success' | 'info' | 'default'
  onBlur?:any
  onChange?:any
  value?:any
}
export const Input =(props:Props) =>{
  const size_ = props.size || 'default';
  const color_= props.color || "default";
  return (
   <React.Fragment>
    <input
      className={classnames(styles.input, styles[size_], styles[color_] )}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      name={props.name}
      id={props.id}
      type={props.type}
      value={props.value}
    />
   </React.Fragment>
  )
}
