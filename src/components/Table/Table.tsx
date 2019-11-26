import * as React from 'react';
import styles from "./Table.css";
interface TableHeading {
  name: string,
  key: string
}


type Data = object[];

interface Props {
  heading: TableHeading[],
  data: Data[]

}
export const Table =(props: Props) =>{
  return(
   <div className={styles.container}>
     <div className={styles.table}>
       <div className={styles.tableHeader}>
         {props.heading && props.heading.map((name, index) =>{
           return (<div className={styles.cellHeaderBody} key={index}>{name.name}</div>)
         })}
       </div>
       {props.data && props.data.map((value ,index) =>{
         return(<div className={styles.tableBody} key={index}>
             {props.heading.map((heading, index) =>{

               return <div key={index} className={styles.cellBody}>{value[heading.key]}</div>
             })}
           </div>
         )
       })}
     </div>
   </div>
  )
}
