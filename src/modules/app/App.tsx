import React from 'react';
import { GlobalStyles } from '../../shared/styles/theme';
import { Header } from '../../shared/styles/styles';
import Binance from '../../assets/images/Binance.png'

export const App : React.FC = () : any => {

    return (
        <>
            <GlobalStyles>
            <Header>
                <div className ='logo'>
                    <img src={Binance} />
                    <h1>coming </h1>
                </div>
            </Header>
            </GlobalStyles>
        </>
    )
}