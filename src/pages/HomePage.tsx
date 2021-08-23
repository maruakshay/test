import React from 'react';
import {H1} from '../components/Components'
interface Mode {
    background : string,
    color : string
}
export const HomePage : React.FC<Mode>= ({background, color}) => {

    return (
        <>
       <H1 background={background} color={color}>This is the Home Page</H1>
        </>
    )
}