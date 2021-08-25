import React, {useState, useEffect} from 'react';
import {H1, Container, Button} from '../components/Components'
import  * as json from '../Wallet_json/Balance.json'
import  Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import {AbiItem} from 'web3-utils';
const web3 = new Web3(Web3.givenProvider ||'http://127.0.0.1:8545');
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
console.log(contract.defaultBlock)
export const HomePage : React.FC<Mode>= ({background, color}) => {
   
    const [amt, setAmount] = useState<string>('');
    const [balance , setBalance] = useState<number>(0);
    const [address, setAddress] = useState<string>('');
    
    useEffect(() => {
       web3.eth.getAccounts().then(data => console.log(data));
        web3.eth.getGasPrice().then(price => console.log(price));
       // default block address
    }, [setBalance])
    web3.eth.getAccounts().then((acc : string[]) =>
    {
        
        let account = acc[0];
        web3.eth.getBalance(account).then((bal : string) => 
        {
            setBalance(parseInt(bal)/1000000000000000000);    
       })
   })
   
    // newContract.methods.getBalance().call().then((bal : number) => setNewbal(bal));
   
    const Deposit = () : void => {
        let amount = amt;
        web3.eth.getAccounts().then((accounts : any[]) => {
            let sender = address;
            let receiver = accounts[0];
            contract.methods.setDeposit(amount).send({from : receiver});
            contract.methods.getBalance().call().then((balance : number) => setBalance(balance));
        })
    }
    const Widthdraw = () : void => {
        let amount = amt;
        web3.eth.getAccounts().then((accounts : any[]) => {
            let sender = accounts[0];
            let receiver = address;
            contract.methods.setWithdraw(amount).send({from : sender , to: receiver});
            contract.methods.getBalance().call().then((balance : number) => setBalance(balance));
            
        })
    }
    const Block  = () : void => {


    }
       

    return (
        <>
       <H1 background={background} color={color}>This is the Home Page</H1>
       <Container background={background} color={color}>
       <input type='text' placeholder='enter the amount' onChange={(e) => setAmount(e.target.value)} />
       <input type='text' placeholder='enter the address' onChange={(e) => setAddress(e.target.value)} />
       <Button background={background} color={color} onClick={Widthdraw}>send</Button>
       {/* <button onClick={Deposit}>Deposit</button> */}
       <div> the balance is : <br/>{balance}</div>
       </Container>
       
        </>
    )
}