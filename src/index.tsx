import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div
`
display : block;
text-align : center;
`
const App : React.FC = () => {

    return (
        <>
            <Container>
                <h1>Redux Store</h1>
            </Container>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));