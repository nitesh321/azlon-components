import * as React from 'react';
import styles from './Svg.css'
import classNames from "classnames";
// @ts-ignore
import Vivus from "vivus";
interface svg{
  current: object
}
interface Props {
  children: React.ReactNode,
  position: 'center' | 'right' | 'default',
  size:  'medium' | 'large' |'default'
  svgRef:svg,
  duration?: number
}

export class Svg extends React.Component<Props> {
  public svgRef?: React.RefObject<SVGSVGElement> = undefined;
  public position ='default'
  public size ='default'
  constructor (props: Props) {
    super(props);
    this.position = props.position
    this.size= props.size
  }

  public componentDidMount () {
    if (!this.props.svgRef || !this.props.svgRef.current) {
      return;
    }
    return new Vivus(this.props.svgRef.current as any, {duration: this.props.duration || 50});
  }
  public render () {
    return (<React.Fragment>
              <div className={classNames(styles.svg, styles[this.props.position])}>
                <div className={classNames(styles.default , styles[this.props.size])}> {this.props.children}</div>
               </div>
         </React.Fragment>)
  }
}







// import * as React from 'react';
// import styles from './Svg.css'
// import classNames from "classnames";
// // import {useEffect} from "react";
// // // @ts-ignore
// // import Vivus from 'vivus';
// interface Props {
//   children: React.ReactNode,
//   position: 'center' | 'right' | 'default',
//   size:  'medium' | 'large' |'default'
//   svgRef:object,
//   duration?: number
// }
// export const Svg =(props: Props) =>{
//
//     const position = props.position || 'default'
//     const size =props.size || 'default';
//     console.log(props.svgRef , typeof props.svgRef, props.svgRef)
//   // useEffect(() =>{
//   //   console.log(props.svgRef)
//   // },[props.svgRef])
//     // useEffect(() =>{
//     //   console.log('hekko')
//     //   if (!props.svgRef || !props.svgRef.current ) {
//     //     return;
//     //   }
//     //   return new Vivus(props.svgRef.current , {duration: props.duration || 50});
//     // },[props.svgRef])
//   return (<React.Fragment>
//         <div className={classNames(styles.svg, styles[position])}>
//          <div className={classNames(styles.default , styles[size])}> {props.children}</div>
//         </div>
//   </React.Fragment>)
// }
