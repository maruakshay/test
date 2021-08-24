import styled from 'styled-components';

export const Header = styled.header
`
display: flex;
width : 100%;
justify-content : space-between;
align-items : center;
flex-flow : row wrap;
padding : 0 15px;

.logo{
    font-size : 26px;
    font-weight : 100;
    a{
        padding : 0;
    }
}
ul {
    display : flex;
    flex-flow : row wrap;
}
a {
    padding : 0 25px;
    color : black;
    transition : opacity ease-in-out 0.5s;
    text-decoration : none;
    &:hover {
        opacity : 0.5
    }
}
button {
    margin : 0 25px;
    border-radius : 10px;
    background-color : white;
    border : 0.5px solid black

}
@media screen and (max-width : 789px)
{
    flex-flow : column wrap;
    ul {
        padding-inline-start: 0;
    }
}
`
interface Mode {
    background? : string,
    color?: string
}
export const H1 = styled.h1<Mode>
`
background-color : ${props => props.background};
color : ${props => props.color};
margin-top: 10px;
text-align : center;
margin-block-end: 0;
transition : all ease-in-out 0.5s;
`

export const Input = styled.input
`
width : 50%;
margin: auto;
transition : all ease-in-out 0.5s;
`
export const Container = styled.div<Mode>
`
margin: auto;
display: flex;
flex-flow : column wrap;
align-items : center;
color : ${props => props.color};
background-color : ${props => props.background};
transition : all ease-in-out 0.5s;

input{
    font-size : 24px;
    text-align: center
}
div{
    font-size : 35px;
    font-weight: 500;
    text-align : center;
}

`
export const Button = styled.button<Mode>
`
padding :10px 50px;
background-color : ${props => props.background};
color : ${props => props.color} ;
margin-top : 2rem;
border : 0.5px solid ${props => props.color}; 
transition : all ease-in-out 0.5s;

`