import React, { useState, createContext } from "react";
import axios from 'axios'
import { useMoralis, useMoralisQuery } from "react-moralis";
import { Web3Storage } from "web3.storage/dist/bundle.esm.min";
//--------- MAHIMA
import { v4 as uuidv4 } from "uuid";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export const BookContext = createContext();
export const BookContextProvider = (props) => {
    const [Image, setImage] = useState();
    console.log(Image,'imag in context');
    const [pdf, setPdf] = useState('');
console.log(pdf,'pdf in context');

    const { Moralis, user, account } = useMoralis();
    const { data, fetch } = useMoralisQuery("UntouchedArchieve");
    const [NewData, setData] = useState([]);
    const [bookDetails, setBookDetails] = useState({})
    const API_Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzOEQzNkJhOTIwOWU0NDhCMzZEOGYwNzQ2MzE4ZGFiNmUyNzUwQmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTczNDI2NzMzMDcsIm5hbWUiOiJVbnRvdWNoZWQgYXJjaGlldmUifQ.t3zZU9B7HVdsJTKXajBRuNDsE6piX0tjWQqtSPP23h4";
    const client = new Web3Storage({ token: API_Token })
    const untouchedA = Moralis.Object.extend("UntouchedArchieve");
    const UntoucheDdata = new untouchedA();
    const { authenticate, isAuthenticated, isInitialized } = useMoralis()

//     require('dotenv').config()
// const Web3 = require('web3');
// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const mnemonic = process.env.MNEMONIC;
// const clientURL = `https://rpc-mumbai.maticvigil.com`;
// const provider = new HDWalletProvider(mnemonic, clientURL );
// const web3 = new Web3(provider); 

// // const dataPath = require('../../build/contracts/mintContract.json');
// const abiArray =  [
//     {
//       "inputs": [],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "approved",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "Approval",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "operator",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "bool",
//           "name": "approved",
//           "type": "bool"
//         }
//       ],
//       "name": "ApprovalForAll",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "previousOwner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "OwnershipTransferred",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "Transfer",
//       "type": "event"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "approve",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         }
//       ],
//       "name": "balanceOf",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "getApproved",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "operator",
//           "type": "address"
//         }
//       ],
//       "name": "isApprovedForAll",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [],
//       "name": "name",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [],
//       "name": "owner",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "ownerOf",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [],
//       "name": "renounceOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "safeTransferFrom",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         },
//         {
//           "internalType": "bytes",
//           "name": "data",
//           "type": "bytes"
//         }
//       ],
//       "name": "safeTransferFrom",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "operator",
//           "type": "address"
//         },
//         {
//           "internalType": "bool",
//           "name": "approved",
//           "type": "bool"
//         }
//       ],
//       "name": "setApprovalForAll",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "bytes4",
//           "name": "interfaceId",
//           "type": "bytes4"
//         }
//       ],
//       "name": "supportsInterface",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [],
//       "name": "symbol",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "tokenURI",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function",
//       "constant": true
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "transferFrom",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "transferOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "tokenURI",
//           "type": "string"
//         }
//       ],
//       "name": "mintNFT",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ];
// const contract_address = process.env.CONTRACT_ADDRESS;

    const login = async () => {
        if (!isAuthenticated) {
            await authenticate({
                provider: "web3Auth",
                clientId: "BHQlt53J8Q_CprFI9tgx5aRB7pE9Ei0ccchzXQBNIYAI4RwdZ84Y2sVGoezEZ3S_kwwt3MuZ2eZIGoTYET--4I0",
            })
                .then(function (user) {
                    let address = user.get("ethAddress")
                    console.log(address, "get address");
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }


    function addData(Item) {
        console.log(Item, "Item")
        const blob = new Blob(
            [
                JSON.stringify(Item),
            ],
            { type: "application/json" }
        );
        const files = [
            new File([blob], "data.json"),
        ];
        console.log(files);
        return files;

    }
    async function storeFiles(Item) {
        var array = [];

        // TO GET CURRENT USER WALLET ADDRESS
        let currentUser = login
        console.log(currentUser, 'current user login')
        const Cuser = Moralis.User.current(currentUser)
        UntoucheDdata.set("Current_User", user)
        console.log(Cuser, 'cuser...');


        let files = addData(Item)
        const cid = await client.put(files);
        UntoucheDdata.set("CID", cid);
        UntoucheDdata.save();
        console.log("stored files with cid", cid);
        axios.get(`https://${cid}.ipfs.infura-ipfs.io/data.json`)
            .then(function (response) {
                array.push(response.data);
                setData(array);
            })
            .catch(function (error) {
                console.log(error);
            })
            
        return cid;
    }
    console.log(NewData);


    async function getBookDetails(params) {

        if (isAuthenticated) {
            const archives = Moralis.Object.extend("UntouchedArchieve");
            const query = new Moralis.Query(archives);
            query.equalTo("objectId", (params.id).toString());
            const object = await query.first();
            axios.get(`https://${object.attributes.CID}.ipfs.infura-ipfs.io/data.json`)
                .then(function (response) {
                    setBookDetails(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }


    // ------------MAHIMA'CODE

async function storeFile(file) {
    console.log(file.name, "StoreFiles");
       const ext = file.name.split('.').pop();

     const fileName = `${uuidv4()}.${ext}`;
     const newFile = new File([file], fileName, {type: file.type});
     const cid = await client.put([newFile], {
         name: fileName,
     });
     console.log(cid,"cid from storeFile")
     const imageURI = `https://${cid}.ipfs.dweb.link/${fileName}`;
     console.log(imageURI, "imageURI from storeFiles");
     setImage(imageURI);
    //  const accounts = await web3.eth.getAccounts();
    //         console.log('Attempting to deploy from account ', accounts[0]);
        
    //         const contract = await new web3.eth.Contract(abiArray,contract_address);
    //         const tokenURI = `https://ipfs.io/ipfs/${cid}`;
    //         await contract.methods.mintNFT(tokenURI).send({from: accounts[0]});
        
    //         console.log('Yay! NFT minted successfully');
    //  const blob = new Blob([JSON.stringify({file:imageURI})], { type: "application/json" });
    //  const files = [new File([blob], "file.json")];
    //  setImage(imageURI)
    //  console.log(files);
     return imageURI;
}
console.log(Image);



async function storePdfFile(file){
    console.log(file.name, "storePdfFile");
    const ext = file.name.split('.').pop();
  
  const fileName = `${uuidv4()}.${ext}`;
  const newFile = new File([file], fileName, {type: file.type});
  const cid = await client.put([newFile], {
    name: fileName,
  });
  console.log(cid,"cid from storePdfFile")
  const pdfURI = `https://${cid}.ipfs.dweb.link/${fileName}`;
  console.log(pdfURI, "pdfURI from storePdfFile");
//   const blob = new Blob([JSON.stringify({file : pdfURI})], { type: "application/json" });
//   const files = [new File([blob], "pdf.json")];
//   console.log(files);
  setPdf(pdfURI)
  
  
  
  return pdfURI;
  
   }

    return (
        <BookContext.Provider
            value={{
                addData,
                storeFiles,
                getBookDetails,
                data,
                bookDetails,
                login,
                storeFile,
                Image,
                storePdfFile,
                pdf
                // currentUser
                // fetch
            }}
        >
            {props.children}
        </BookContext.Provider>
    );
}