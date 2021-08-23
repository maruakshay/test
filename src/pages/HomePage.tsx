import React, {useState} from 'react';
import {H1} from '../components/Components'
import  * as json from '../Wallet_json/Balance.json'
import  Web3 from 'web3';
import {AbiItem} from 'web3-utils';
const web3 = new Web3('http://127.0.0.1:8545');
// enum lists {
//     abi = json.abi, 
//     address = json.networks[5777].address
// }

// 


interface Mode {
    background : string,
    color : string
}
interface Account {
    abi : AbiItem[],
    address : string | undefined,
}
const data : Account = {
    abi : json.abi as AbiItem[], 
    address : json.networks[5777].address
}
const contract = new web3.eth.Contract(data.abi, data.address);
export const HomePage : React.FC<Mode>= ({background, color}) => {
   
    const [amt, setAmount] = useState('');
    const Deposit = () => {
        let amount = amt;
        web3.eth.getAccounts().then((accounts : any[]) => {
            let account = accounts[2];
            contract.methods.setDeposit(amount).send({from : account});
            contract.methods.getBalance().call().then((balance : number) => {console.log(`..........Deposit balance is ${balance}`)})
        })
    }
    const Widthdraw = () => {
        let amount = amt;
        web3.eth.getAccounts().then((accounts : any[]) => {
            let account = accounts[2];
            contract.methods.setWithdraw(amount).send({from : account});
            contract.methods.getBalance().call().then((balance : number) => {console.log(`.........Withdraw balance is ${balance}`)})
        })
    }
    return (
        <>
       <H1 background={background} color={color}>This is the Home Page</H1>
       <input type='text' placeholder='enter the amount' onChange={(e) => setAmount(e.target.value)} />
       <button onClick={Widthdraw}>Withdraw</button>
       <button onClick={Deposit}>Deposit</button>
        </>
    )
}