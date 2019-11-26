import * as React from 'react';
import './Theme.css';

export const Theme = (props: {children: React.ReactNode}) => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
};
