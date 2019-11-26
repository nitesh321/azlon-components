import React, { Component } from 'react'
import {
  Theme,
  Navbar,
  Row,
  Text,
  Input, Button,
  Dropdown,
  Select,
  Table,
  Tooltip,
  Modal,
  List,
  Svg,
  Footer, Parallax,
  Box

} from 'azlon-components'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      showModal: false,
      display: false,
      toggleData:'none'
    }
    this.svgRef = React.createRef();
  }
  render () {
    const items =[{
      name: 'Home',
      link:'/'
    },
      {
        name:'Contact',
        link:'/contact'
      },
      {
        name:'logout',
        link:'www.google.co.in'
      }]
    const name=[
      {name:"first Name",
        key:'firstName'},
      {name:"last Name",
        key: 'lastName'
      },
      {
        name: 'Age',
        key: 'age'
      },{
      name:'Location',
        key:'location'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      },
      {
        name:'gender',
        key:'gender'
      }
    ];
    const data=[{firstName:"mohan",lastName:"kumar",age:"22",location:"Delhi"},
      {firstName:"Sohan",lastName:"kumar",age:"22",location:"Delhi"},
      {firstName:"Rohan",lastName:"kumar",age:"22",location:"Delhi"},
      {firstName:"Anuj",lastName:"kumar",age:"22",location:"Delhi"},
          ]
    return (
      <Theme>
        <Navbar title="Azlon Tech" items={items}/>
        <Row/>
        <Row>
          <Text type="heading">This is a heading</Text>
          <Text type="subheading">This is a subheading</Text>
        </Row>
        <Row>
          <Text type="subheading">Simple link</Text>
        </Row>

        <Row>
          <input type="checkbox"/>
        </Row>
        <Row>
          <Box>HELLO WORLD</Box>
        </Row>
        <Row>
          <Svg position="center"  size="large" svgRef={this.svgRef} duration="100">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768" ref={this.svgRef}>
              <title>azlon-logoArtboard 1</title>
              <g id="Layer_2" data-name="Layer 2">
                <path d="M268.5,294.5c0-17,13-23,22-23h135c13,2,19,16,19,23v302c1,19-16,26-22,26h-133c-14,0-21-14-21-24Z" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <rect x="279.5" y="307.5" width={155} height={280} style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
              </g>
              <g id="Layer_3" data-name="Layer 3">
                <path d="M801.5,603.5v-271c0-6,7-19,17-21h407c7,0,20,8,20,20v272c-2,9-6,15-16,19h-410C815.5,622.5,801.5,615.5,801.5,603.5Z" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <rect x="833.5" y="325.5" width={380} height={283} style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
              </g>
              <g id="Layer_4" data-name="Layer 4">
                <path d="M410.5,271.5v-128c0-9,12-21,21-21h650c9,0,23,10,23,25v164" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <line x1="440.5" y1="612.5" x2="804.36" y2="612.5" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <line x1="444.5" y1="596.5" x2="801.5" y2="596.5" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <path d="M686.21,596.5s5.29,8,10.29,8c3,0,105-1,105-1" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <line x1="444.5" y1="569.5" x2="801.5" y2="569.64" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <polyline points="427.5 271.5 427.5 150.5 1087.5 150.5 1087.5 311.5" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <line x1="457.21" y1="150.5" x2="459.34" y2="569.5" style={{fill: 'none', stroke: '#012bca', strokeMiterlimit: 10}} />
                <line x1="472.5" y1="179.5" x2="1071.5" y2="179.5" style={{fill: 'none', stroke: '#012bca', strokeMiterlimit: 10}} />
                <path d="M443.75,161.68,438,166.43v5.13a.5.5,0,0,0,.5.5H442a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v3a.51.51,0,0,0,.5.5h3.51a.5.5,0,0,0,.5-.5v-5.13l-5.77-4.75a.39.39,0,0,0-.48,0Zm9.11,3.23-2.61-2.15v-4.33a.38.38,0,0,0-.38-.38h-1.75a.37.37,0,0,0-.37.38v2.27l-2.8-2.31a1.52,1.52,0,0,0-1.91,0l-7.92,6.52a.38.38,0,0,0-.05.53h0l.8,1a.38.38,0,0,0,.53.05h0l7.35-6.06a.39.39,0,0,1,.48,0l7.36,6.06a.38.38,0,0,0,.53-.05h0l.79-1a.37.37,0,0,0-.05-.53Z" style={{fill: '#012bca'}} />
                <path d="M510.5,233.06a16,16,0,1,0-16-16A16,16,0,0,0,510.5,233.06Zm14.25,3.56h-6.13a19.31,19.31,0,0,1-16.24,0h-6.13A14.25,14.25,0,0,0,482,250.88v1.78a5.34,5.34,0,0,0,5.34,5.34h46.32a5.34,5.34,0,0,0,5.34-5.34v-1.78A14.25,14.25,0,0,0,524.75,236.62Z" style={{fill: '#012bca'}} />
                <path d="M453.74,195.44l-1.83-1a7,7,0,0,0,0-2.81l1.83-1a.48.48,0,0,0,.24-.56,10,10,0,0,0-2.35-3.8.55.55,0,0,0-.63-.09l-1.83,1a8.15,8.15,0,0,0-2.61-1.41v-2a.48.48,0,0,0-.4-.47,11.53,11.53,0,0,0-4.68,0,.48.48,0,0,0-.4.47v2a8.56,8.56,0,0,0-2.61,1.41l-1.82-1a.55.55,0,0,0-.64.1,9.7,9.7,0,0,0-2.34,3.79.45.45,0,0,0,.23.56l1.83,1a7.43,7.43,0,0,0,0,2.82l-1.83,1a.48.48,0,0,0-.23.57A9.77,9.77,0,0,0,436,199.8a.53.53,0,0,0,.64.09l1.82-1a8.35,8.35,0,0,0,2.61,1.41v2a.5.5,0,0,0,.4.47,11.53,11.53,0,0,0,4.68,0,.5.5,0,0,0,.41-.47v-2a8.62,8.62,0,0,0,2.6-1.41l1.83,1a.53.53,0,0,0,.64-.09A9.94,9.94,0,0,0,454,196,.49.49,0,0,0,453.74,195.44Zm-9.92.82a3.22,3.22,0,1,1,3.43-3.21A3.34,3.34,0,0,1,443.82,196.26Z" style={{fill: '#012bca'}} />
                <path d="M451.41,227.12h-.47V216.81h-15v10.31h-.47a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h4.69a.46.46,0,0,0,.46-.47v-5.15a2.82,2.82,0,1,1,5.63,0v5.15a.47.47,0,0,0,.47.47h4.69a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,451.41,227.12Zm0-13.12H435.47a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h15.94a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,451.41,214Z" style={{fill: '#012bca'}} />
                <line x1={290} y1={553} x2={422} y2={553} style={{fill: '#012bca', stroke: '#012bca', strokeMiterlimit: 10}} />
                <path d="M306.75,565.68,301,570.43v5.13a.5.5,0,0,0,.5.5H305a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v3a.51.51,0,0,0,.5.5h3.51a.5.5,0,0,0,.5-.5v-5.13l-5.77-4.75a.39.39,0,0,0-.48,0Zm9.11,3.23-2.61-2.15v-4.33a.38.38,0,0,0-.38-.38h-1.75a.37.37,0,0,0-.37.38v2.27l-2.8-2.31a1.52,1.52,0,0,0-1.91,0l-7.92,6.52a.38.38,0,0,0-.05.53h0l.8,1a.38.38,0,0,0,.53.05h0l7.35-6.06a.39.39,0,0,1,.48,0l7.36,6.06a.38.38,0,0,0,.53-.05h0l.79-1a.37.37,0,0,0-.05-.53Z" style={{fill: '#012bca'}} />
                <path d="M365.74,572.44l-1.83-1a7,7,0,0,0,0-2.81l1.83-1a.48.48,0,0,0,.24-.56,10,10,0,0,0-2.35-3.8.55.55,0,0,0-.63-.09l-1.83,1a8.15,8.15,0,0,0-2.61-1.41v-2a.48.48,0,0,0-.4-.47,11.53,11.53,0,0,0-4.68,0,.48.48,0,0,0-.4.47v2a8.56,8.56,0,0,0-2.61,1.41l-1.82-1a.55.55,0,0,0-.64.1,9.7,9.7,0,0,0-2.34,3.79.45.45,0,0,0,.23.56l1.83,1a7.43,7.43,0,0,0,0,2.82l-1.83,1a.48.48,0,0,0-.23.57A9.77,9.77,0,0,0,348,576.8a.53.53,0,0,0,.64.09l1.82-1a8.35,8.35,0,0,0,2.61,1.41v2a.5.5,0,0,0,.4.47,11.53,11.53,0,0,0,4.68,0,.5.5,0,0,0,.41-.47v-2a8.62,8.62,0,0,0,2.6-1.41l1.83,1a.53.53,0,0,0,.64-.09A9.94,9.94,0,0,0,366,573,.49.49,0,0,0,365.74,572.44Zm-9.92.82a3.22,3.22,0,1,1,3.43-3.21A3.34,3.34,0,0,1,355.82,573.26Z" style={{fill: '#012bca'}} />
                <path d="M410.41,575.12h-.47V564.81h-15v10.31h-.47a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h4.69a.46.46,0,0,0,.46-.47v-5.15a2.82,2.82,0,1,1,5.63,0v5.15a.47.47,0,0,0,.47.47h4.69a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,410.41,575.12Zm0-13.12H394.47a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h15.94a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,410.41,562Z" style={{fill: '#012bca'}} />
                <line x1={856} y1="359.5" x2={1196} y2="359.5" style={{fill: 'none', stroke: '#012bca', strokeMiterlimit: 10}} />
                <path d="M881.75,340.68,876,345.43v5.13a.5.5,0,0,0,.5.5H880a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v3a.51.51,0,0,0,.5.5h3.51a.5.5,0,0,0,.5-.5v-5.13l-5.77-4.75a.39.39,0,0,0-.48,0Zm9.11,3.23-2.61-2.15v-4.33a.38.38,0,0,0-.38-.38h-1.75a.37.37,0,0,0-.37.38v2.27l-2.8-2.31a1.52,1.52,0,0,0-1.91,0l-7.92,6.52a.38.38,0,0,0,0,.53h0l.8,1a.38.38,0,0,0,.53,0h0l7.35-6.06a.39.39,0,0,1,.48,0l7.36,6.06a.38.38,0,0,0,.53,0h0l.79-1a.37.37,0,0,0,0-.53Z" style={{fill: '#012bca'}} />
                <path d="M1035.74,348.44l-1.83-1a7,7,0,0,0,0-2.81l1.83-1a.48.48,0,0,0,.24-.56,10,10,0,0,0-2.35-3.8.55.55,0,0,0-.63-.09l-1.83,1a8.15,8.15,0,0,0-2.61-1.41v-2a.48.48,0,0,0-.4-.47,11.53,11.53,0,0,0-4.68,0,.48.48,0,0,0-.4.47v2a8.56,8.56,0,0,0-2.61,1.41l-1.82-1a.55.55,0,0,0-.64.1,9.7,9.7,0,0,0-2.34,3.79.45.45,0,0,0,.23.56l1.83,1a7.43,7.43,0,0,0,0,2.82l-1.83,1a.48.48,0,0,0-.23.57,9.77,9.77,0,0,0,2.34,3.79.53.53,0,0,0,.64.09l1.82-1a8.35,8.35,0,0,0,2.61,1.41v2a.5.5,0,0,0,.4.47,11.53,11.53,0,0,0,4.68,0,.5.5,0,0,0,.41-.47v-2a8.62,8.62,0,0,0,2.6-1.41l1.83,1a.53.53,0,0,0,.64-.09A9.94,9.94,0,0,0,1036,349,.49.49,0,0,0,1035.74,348.44Zm-9.92.82a3.22,3.22,0,1,1,3.43-3.21A3.34,3.34,0,0,1,1025.82,349.26Z" style={{fill: '#012bca'}} />
                <path d="M1177.41,352.12h-.47V341.81h-15v10.31h-.47a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h4.69a.46.46,0,0,0,.46-.47v-5.15a2.82,2.82,0,1,1,5.63,0v5.15a.47.47,0,0,0,.47.47h4.69a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,1177.41,352.12Zm0-13.12h-15.94a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h15.94a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,1177.41,339Z" style={{fill: '#012bca'}} />
                <path d="M901.5,442.06a16,16,0,1,0-16-16A16,16,0,0,0,901.5,442.06Zm14.25,3.56h-6.13a19.31,19.31,0,0,1-16.24,0h-6.13A14.25,14.25,0,0,0,873,459.88v1.78a5.34,5.34,0,0,0,5.34,5.34h46.32a5.34,5.34,0,0,0,5.34-5.34v-1.78A14.25,14.25,0,0,0,915.75,445.62Z" style={{fill: '#012bca'}} />
                <path d="M355.5,363.06a16,16,0,1,0-16-16A16,16,0,0,0,355.5,363.06Zm14.25,3.56h-6.13a19.31,19.31,0,0,1-16.24,0h-6.13A14.25,14.25,0,0,0,327,380.88v1.78a5.34,5.34,0,0,0,5.34,5.34h46.32a5.34,5.34,0,0,0,5.34-5.34v-1.78A14.25,14.25,0,0,0,369.75,366.62Z" style={{fill: '#012bca'}} />
                <rect x={574} y={214} width={487} height={23} style={{fill: '#012bca'}} />
                <rect x={623} y={247} width={438} height={11} style={{fill: '#012bca'}} />
                <rect x={953} y={426} width={243} height={22} style={{fill: '#012bca'}} />
                <rect x={977} y={456} width={219} height={11} style={{fill: '#012bca'}} />
                <rect x={301} y={410} width={110} height={38} style={{fill: '#012bca'}} />
                <rect x={316} y={467} width={78} height={18} style={{fill: '#012bca'}} />
              </g>
            </svg>
          </Svg>
        </Row>
        <Row>
          <Svg position="center"  size="medium" svgRef={this.svgRef} duration="150">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768" ref={this.svgRef}>
              <title>azlon-logoArtboard 1</title>
              <g id="Layer_2" data-name="Layer 2">
                <path d="M268.5,294.5c0-17,13-23,22-23h135c13,2,19,16,19,23v302c1,19-16,26-22,26h-133c-14,0-21-14-21-24Z" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <rect x="279.5" y="307.5" width={155} height={280} style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
              </g>
              <g id="Layer_3" data-name="Layer 3">
                <path d="M801.5,603.5v-271c0-6,7-19,17-21h407c7,0,20,8,20,20v272c-2,9-6,15-16,19h-410C815.5,622.5,801.5,615.5,801.5,603.5Z" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <rect x="833.5" y="325.5" width={380} height={283} style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
              </g>
              <g id="Layer_4" data-name="Layer 4">
                <path d="M410.5,271.5v-128c0-9,12-21,21-21h650c9,0,23,10,23,25v164" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <line x1="440.5" y1="612.5" x2="804.36" y2="612.5" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <line x1="444.5" y1="596.5" x2="801.5" y2="596.5" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <path d="M686.21,596.5s5.29,8,10.29,8c3,0,105-1,105-1" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <line x1="444.5" y1="569.5" x2="801.5" y2="569.64" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <polyline points="427.5 271.5 427.5 150.5 1087.5 150.5 1087.5 311.5" style={{fill: 'none', stroke: '#000', strokeMiterlimit: 10}} />
                <line x1="457.21" y1="150.5" x2="459.34" y2="569.5" style={{fill: 'none', stroke: '#012bca', strokeMiterlimit: 10}} />
                <line x1="472.5" y1="179.5" x2="1071.5" y2="179.5" style={{fill: 'none', stroke: '#012bca', strokeMiterlimit: 10}} />
                <path d="M443.75,161.68,438,166.43v5.13a.5.5,0,0,0,.5.5H442a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v3a.51.51,0,0,0,.5.5h3.51a.5.5,0,0,0,.5-.5v-5.13l-5.77-4.75a.39.39,0,0,0-.48,0Zm9.11,3.23-2.61-2.15v-4.33a.38.38,0,0,0-.38-.38h-1.75a.37.37,0,0,0-.37.38v2.27l-2.8-2.31a1.52,1.52,0,0,0-1.91,0l-7.92,6.52a.38.38,0,0,0-.05.53h0l.8,1a.38.38,0,0,0,.53.05h0l7.35-6.06a.39.39,0,0,1,.48,0l7.36,6.06a.38.38,0,0,0,.53-.05h0l.79-1a.37.37,0,0,0-.05-.53Z" style={{fill: '#012bca'}} />
                <path d="M510.5,233.06a16,16,0,1,0-16-16A16,16,0,0,0,510.5,233.06Zm14.25,3.56h-6.13a19.31,19.31,0,0,1-16.24,0h-6.13A14.25,14.25,0,0,0,482,250.88v1.78a5.34,5.34,0,0,0,5.34,5.34h46.32a5.34,5.34,0,0,0,5.34-5.34v-1.78A14.25,14.25,0,0,0,524.75,236.62Z" style={{fill: '#012bca'}} />
                <path d="M453.74,195.44l-1.83-1a7,7,0,0,0,0-2.81l1.83-1a.48.48,0,0,0,.24-.56,10,10,0,0,0-2.35-3.8.55.55,0,0,0-.63-.09l-1.83,1a8.15,8.15,0,0,0-2.61-1.41v-2a.48.48,0,0,0-.4-.47,11.53,11.53,0,0,0-4.68,0,.48.48,0,0,0-.4.47v2a8.56,8.56,0,0,0-2.61,1.41l-1.82-1a.55.55,0,0,0-.64.1,9.7,9.7,0,0,0-2.34,3.79.45.45,0,0,0,.23.56l1.83,1a7.43,7.43,0,0,0,0,2.82l-1.83,1a.48.48,0,0,0-.23.57A9.77,9.77,0,0,0,436,199.8a.53.53,0,0,0,.64.09l1.82-1a8.35,8.35,0,0,0,2.61,1.41v2a.5.5,0,0,0,.4.47,11.53,11.53,0,0,0,4.68,0,.5.5,0,0,0,.41-.47v-2a8.62,8.62,0,0,0,2.6-1.41l1.83,1a.53.53,0,0,0,.64-.09A9.94,9.94,0,0,0,454,196,.49.49,0,0,0,453.74,195.44Zm-9.92.82a3.22,3.22,0,1,1,3.43-3.21A3.34,3.34,0,0,1,443.82,196.26Z" style={{fill: '#012bca'}} />
                <path d="M451.41,227.12h-.47V216.81h-15v10.31h-.47a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h4.69a.46.46,0,0,0,.46-.47v-5.15a2.82,2.82,0,1,1,5.63,0v5.15a.47.47,0,0,0,.47.47h4.69a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,451.41,227.12Zm0-13.12H435.47a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h15.94a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,451.41,214Z" style={{fill: '#012bca'}} />
                <line x1={290} y1={553} x2={422} y2={553} style={{fill: '#012bca', stroke: '#012bca', strokeMiterlimit: 10}} />
                <path d="M306.75,565.68,301,570.43v5.13a.5.5,0,0,0,.5.5H305a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v3a.51.51,0,0,0,.5.5h3.51a.5.5,0,0,0,.5-.5v-5.13l-5.77-4.75a.39.39,0,0,0-.48,0Zm9.11,3.23-2.61-2.15v-4.33a.38.38,0,0,0-.38-.38h-1.75a.37.37,0,0,0-.37.38v2.27l-2.8-2.31a1.52,1.52,0,0,0-1.91,0l-7.92,6.52a.38.38,0,0,0-.05.53h0l.8,1a.38.38,0,0,0,.53.05h0l7.35-6.06a.39.39,0,0,1,.48,0l7.36,6.06a.38.38,0,0,0,.53-.05h0l.79-1a.37.37,0,0,0-.05-.53Z" style={{fill: '#012bca'}} />
                <path d="M365.74,572.44l-1.83-1a7,7,0,0,0,0-2.81l1.83-1a.48.48,0,0,0,.24-.56,10,10,0,0,0-2.35-3.8.55.55,0,0,0-.63-.09l-1.83,1a8.15,8.15,0,0,0-2.61-1.41v-2a.48.48,0,0,0-.4-.47,11.53,11.53,0,0,0-4.68,0,.48.48,0,0,0-.4.47v2a8.56,8.56,0,0,0-2.61,1.41l-1.82-1a.55.55,0,0,0-.64.1,9.7,9.7,0,0,0-2.34,3.79.45.45,0,0,0,.23.56l1.83,1a7.43,7.43,0,0,0,0,2.82l-1.83,1a.48.48,0,0,0-.23.57A9.77,9.77,0,0,0,348,576.8a.53.53,0,0,0,.64.09l1.82-1a8.35,8.35,0,0,0,2.61,1.41v2a.5.5,0,0,0,.4.47,11.53,11.53,0,0,0,4.68,0,.5.5,0,0,0,.41-.47v-2a8.62,8.62,0,0,0,2.6-1.41l1.83,1a.53.53,0,0,0,.64-.09A9.94,9.94,0,0,0,366,573,.49.49,0,0,0,365.74,572.44Zm-9.92.82a3.22,3.22,0,1,1,3.43-3.21A3.34,3.34,0,0,1,355.82,573.26Z" style={{fill: '#012bca'}} />
                <path d="M410.41,575.12h-.47V564.81h-15v10.31h-.47a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h4.69a.46.46,0,0,0,.46-.47v-5.15a2.82,2.82,0,1,1,5.63,0v5.15a.47.47,0,0,0,.47.47h4.69a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,410.41,575.12Zm0-13.12H394.47a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h15.94a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,410.41,562Z" style={{fill: '#012bca'}} />
                <line x1={856} y1="359.5" x2={1196} y2="359.5" style={{fill: 'none', stroke: '#012bca', strokeMiterlimit: 10}} />
                <path d="M881.75,340.68,876,345.43v5.13a.5.5,0,0,0,.5.5H880a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v3a.51.51,0,0,0,.5.5h3.51a.5.5,0,0,0,.5-.5v-5.13l-5.77-4.75a.39.39,0,0,0-.48,0Zm9.11,3.23-2.61-2.15v-4.33a.38.38,0,0,0-.38-.38h-1.75a.37.37,0,0,0-.37.38v2.27l-2.8-2.31a1.52,1.52,0,0,0-1.91,0l-7.92,6.52a.38.38,0,0,0,0,.53h0l.8,1a.38.38,0,0,0,.53,0h0l7.35-6.06a.39.39,0,0,1,.48,0l7.36,6.06a.38.38,0,0,0,.53,0h0l.79-1a.37.37,0,0,0,0-.53Z" style={{fill: '#012bca'}} />
                <path d="M1035.74,348.44l-1.83-1a7,7,0,0,0,0-2.81l1.83-1a.48.48,0,0,0,.24-.56,10,10,0,0,0-2.35-3.8.55.55,0,0,0-.63-.09l-1.83,1a8.15,8.15,0,0,0-2.61-1.41v-2a.48.48,0,0,0-.4-.47,11.53,11.53,0,0,0-4.68,0,.48.48,0,0,0-.4.47v2a8.56,8.56,0,0,0-2.61,1.41l-1.82-1a.55.55,0,0,0-.64.1,9.7,9.7,0,0,0-2.34,3.79.45.45,0,0,0,.23.56l1.83,1a7.43,7.43,0,0,0,0,2.82l-1.83,1a.48.48,0,0,0-.23.57,9.77,9.77,0,0,0,2.34,3.79.53.53,0,0,0,.64.09l1.82-1a8.35,8.35,0,0,0,2.61,1.41v2a.5.5,0,0,0,.4.47,11.53,11.53,0,0,0,4.68,0,.5.5,0,0,0,.41-.47v-2a8.62,8.62,0,0,0,2.6-1.41l1.83,1a.53.53,0,0,0,.64-.09A9.94,9.94,0,0,0,1036,349,.49.49,0,0,0,1035.74,348.44Zm-9.92.82a3.22,3.22,0,1,1,3.43-3.21A3.34,3.34,0,0,1,1025.82,349.26Z" style={{fill: '#012bca'}} />
                <path d="M1177.41,352.12h-.47V341.81h-15v10.31h-.47a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h4.69a.46.46,0,0,0,.46-.47v-5.15a2.82,2.82,0,1,1,5.63,0v5.15a.47.47,0,0,0,.47.47h4.69a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,1177.41,352.12Zm0-13.12h-15.94a.47.47,0,0,0-.47.47v.94a.47.47,0,0,0,.47.47h15.94a.47.47,0,0,0,.47-.47v-.94A.47.47,0,0,0,1177.41,339Z" style={{fill: '#012bca'}} />
                <path d="M901.5,442.06a16,16,0,1,0-16-16A16,16,0,0,0,901.5,442.06Zm14.25,3.56h-6.13a19.31,19.31,0,0,1-16.24,0h-6.13A14.25,14.25,0,0,0,873,459.88v1.78a5.34,5.34,0,0,0,5.34,5.34h46.32a5.34,5.34,0,0,0,5.34-5.34v-1.78A14.25,14.25,0,0,0,915.75,445.62Z" style={{fill: '#012bca'}} />
                <path d="M355.5,363.06a16,16,0,1,0-16-16A16,16,0,0,0,355.5,363.06Zm14.25,3.56h-6.13a19.31,19.31,0,0,1-16.24,0h-6.13A14.25,14.25,0,0,0,327,380.88v1.78a5.34,5.34,0,0,0,5.34,5.34h46.32a5.34,5.34,0,0,0,5.34-5.34v-1.78A14.25,14.25,0,0,0,369.75,366.62Z" style={{fill: '#012bca'}} />
                <rect x={574} y={214} width={487} height={23} style={{fill: '#012bca'}} />
                <rect x={623} y={247} width={438} height={11} style={{fill: '#012bca'}} />
                <rect x={953} y={426} width={243} height={22} style={{fill: '#012bca'}} />
                <rect x={977} y={456} width={219} height={11} style={{fill: '#012bca'}} />
                <rect x={301} y={410} width={110} height={38} style={{fill: '#012bca'}} />
                <rect x={316} y={467} width={78} height={18} style={{fill: '#012bca'}} />
              </g>
            </svg>
          </Svg>
        </Row>
        <Parallax
          backgroundHeight={"40rem"}
        image={"https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
        />
        <Row>
          <Text type="subheading"> Dropdown component</Text>
        </Row>
          <Row>
            <Dropdown name="Dropdown" items={items}/>
          </Row>

        <Row/>
        <div style={{width:'18rem'}}>
          <Row>
            <Text type={"subheading"}>Tooltip</Text>
          </Row>
          <Row/>
         <Row>
           <Row>
             <Row>
               <Row>
                 <Row><Row>
                   <Tooltip text="Error">Hello</Tooltip>
                 </Row></Row>
               </Row>
             </Row>
           </Row>
         </Row>
          <Row>
            <Text type="subheading">Button</Text>
          </Row>
          <Row>
            <Input color="success"   placeholder="Success"/>
          </Row>
          <Row>
            <Input color="danger"   placeholder="Danger"/>
          </Row>
          <Row>
            <Input color="info" placeholder="Info"/>
          </Row>
          <Row><Text type="subheading"> Size</Text></Row>
          <Row>
            <Input color="info" size="medium" placeholder="medium"/>
          </Row>
          <Row>
            <Input color="info" size="large" placeholder="large"/>
          </Row>
          <Row/>
          <Row>
            <Text type="subheading">Button</Text>
          </Row>
        <Row>
          <Button color="info" size="normal" text="Normal"/>
        </Row>
        <Row>
          <Button color="danger" size="large" text="Large"/>
        </Row>
          <Row>
            <Button  isLoading="true" size="large" text="loading"/>
          </Row>
          <Row>
          </Row>
          <Row/>
          <Row>
            <Text type="subheading">Select component</Text>
          </Row>
          <Row/>
          <Row>
            <Select items={[{name:'hello'}]}/>
          </Row>
        </div>
        <Row/>
        <Row>
          <Text type="subheading">Table Component</Text>
        </Row>
        <Row>
          <Row>
            <Table heading={name} data={data}/>
          </Row>
        </Row>
        <Row/>
        <Button/>
        <Row/><Row/><Row/>
        <Row>
          <Modal name="Open Modal" visibility={this.state.showModal} openModal={() =>{
            this.setState({showModal: true})
          }} closeModal ={()=>{
            this.setState({showModal:false})
          }}>
            <div style={{color:"red"}}>Hello</div>
            <div>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aliquam aliquid commodi consectetur consequuntur
              <br/>
              cum, deserunt doloribus eos, esse et fuga fugit in nisi nostrum reprehenderit sapiente

              sit veritatis vero voluptates.</div>
          </Modal>
        </Row>
        <Row>
          <Text type="subheading">Lists</Text>
        </Row>
        <Row>
          <div style={{paddingLeft:'0px'}}>
            <List items={[{name:"rohan", display:this.state.toggleData,
              onClick:()=>{
              console.log(this.state.toggleData)
                if(!this.state.display){
                  this.setState((prevState)=>{
                    console.log(prevState)
                    prevState.toggleData='block'
                  })
                }
                return ''}
                },
              {name: "sohan"}, {name:"shyam"}, {name:"ram"}, {name:"shyam"},
              {name:"murari"}]}/>
          </div>
        </Row>
        <Row/>
        <Row/>
        <Parallax
          backgroundHeight={"45rem"}
          contentHeight={"20rem"}
          contentBackground='black'
          color="white"
          image={"https://images.pexels.com/photos/354953/pexels-photo-354953.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}
        >
          <div style={{fontSize:'2rem',textAlign:'center'}}>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aliquam aliquid commodi consectetur consequuntur
            <br/>
            cum, deserunt doloribus eos, esse et fuga fugit in nisi nostrum reprehenderit sapiente

            sit veritatis vero voluptates.
          lorem
          </div>
        </Parallax>
        <Parallax
          backgroundHeight={"50rem"}
          contentHeight={"20rem"}
          image={"https://images.pexels.com/photos/133199/pexels-photo-133199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
        >
          <div>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aliquam aliquid commodi consectetur consequuntur
            <br/>
            cum, deserunt doloribus eos, esse et fuga fugit in nisi nostrum reprehenderit sapiente

            sit veritatis vero voluptates.</div>
        </Parallax>
        <Parallax
          backgroundHeight={"50rem"}
          image={"https://images.pexels.com/photos/1487031/pexels-photo-1487031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
        />
       <Footer logo="Logo "
               companyInfo={['Term and conditions', 'Privacy', 'About']}
               address ={"S-23, First Floor Global Foyer, Sector - 42 Gurugram (HR), India"}
               links={[{name:'Azlon',url:'#'},{name: 'XYZ',url:'#'}]}
       />
      </Theme>
    )
  }
}
