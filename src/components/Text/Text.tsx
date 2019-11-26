import * as React from 'react';
import classnames from 'classnames';
import styles from './Text.css';

export const Text = (props: {children: string, type?: 'heading' | 'subheading' | 'normal'}) => {
  const type_ = props.type || 'normal';
  return (
    <div className={classnames(styles.common, styles[type_])}>{props.children}</div>
  )
};
