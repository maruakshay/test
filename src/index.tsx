import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { createStore } from 'redux';
import reducers from './reducers'
// creating store
const store = createStore(reducers)

const H1 = styled.h1
`
text-align : center;
color : red;
display : block;
`
const Body = styled.body<Mode>
`
display : block ;
background-color : ${props => props.background};
color : ${props => props.color};
width: 100%;
margin: 0;
height: calc(100vh - 29px);
`
type Mode = {
    background : string,
    color : string
}
const App : React.FC = () : any => {

    return (
        <>
        <Body background='black' color='white'>
            <H1>This is the redux app</H1>
            <h2>hey there </h2>
        </Body>
        </>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));