import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const H1 = styled.h1
`
text-align : center;
color : red;
display : block;
`

ReactDOM.render(<H1>This is the redux app</H1>, document.getElementById('root'));