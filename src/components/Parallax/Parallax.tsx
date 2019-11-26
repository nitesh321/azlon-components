import * as React from 'react';
import styles from "./Parallax.css"

interface Props {
  image: string
  backgroundHeight:string
  contentHeight:string;
  contentBackground:string
  color:string
  children?: React.ReactNode;
}
export const Parallax =(props: Props) =>{
  const image ={
    minHeight:`${props.backgroundHeight}`,
    backgroundImage:`url(${props.image})`
  }
  return(
    <React.Fragment>
      <div className={styles.parallax} style={image}/>
      {props.children?
      <div className={styles.parallaxContent} style={ {minHeight:`${props.contentHeight}`, backgroundColor:`${props.contentBackground}`, color:`${props.color}`}}>{props.children}</div> :" "}
    </React.Fragment>
  )
}
