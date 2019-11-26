import * as React from 'react';
import styles from './Navbar.css';
interface navBarItem {
  name: string,
  link?: string,
  action?:() =>{}
}
interface Props {
  title?: string,
  items?: navBarItem[]
  action?:()=>{}
}
export const Navbar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title} onClick={props.action}>{props.title}</div>
      <div>
        {props.items &&
        props.items.map((item, index) =>{
          return <div className={styles.item} key={index} onClick={item.action}>
            {item.name}
          </div>
        })
        }
      </div>
    </nav>
  )
};
