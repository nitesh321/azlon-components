import * as React from 'react';
import styles from './Row.css';

export const Row = (props: {children: React.ReactNode, paddingRight?: string, paddingLeft?: string}) => {
  return (
    <div className={styles.row}>
      {props.children}
    </div>
  )
};
