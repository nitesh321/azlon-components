import * as React from 'react';
import styles from './Footer.css';
import classNames from "classnames";

interface link{
  name: string,
  url:string
}
type info= string
interface Props {
  logo: string,
  address: string
  links: link[]
  companyInfo: info[]
}

export const Footer =(props: Props) =>{
  return(
    <div className={styles.footer}>

      <div className={classNames(styles.footerItem, styles.logo)}>
        <img className={styles.image} src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt={props.logo}/>
      </div>
      <div className={styles.footerItem}>
        <div className={styles.title}>Company</div>
        {props.companyInfo && props.companyInfo.map((info, index) =>{
          return <div key={index} className={styles.subTitle}>{info}</div>
        })}
      </div>
      <div className={styles.footerItem}>
        <div className={styles.title}>Product</div>
        {props.links && props.links.map((link, index) =>{
          return <div key={index} className={styles.subTitle}><a href={link.url} style={{color:'white'}}>{link.name}</a></div>
        })}
      </div>

      <div className={styles.footerItem}>
        <div className={styles.title}>Address</div>
        <div className={styles.subTitle}>{props.address}</div>
      </div>
    </div>
  )
}
