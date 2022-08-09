import React, { useState, useEffect } from "react";
import { mintParentContract } from "../config";
import ContractABI from "../abi/mintContractParent.json";
import { ethers } from "ethers";
import { Web3Storage } from "web3.storage/dist/bundle.esm.min";
import { v4 as uuidv4 } from "uuid";

require("dotenv").config({ path: "./.env" });

// const currentUser = Moralis.User.current();
// console.log(currentUser,"current user");

function UploadForm() {
  const pk_1 = process.env.REACT_APP_PRIVATE_KEY;

  //storyPad
  const [authorname, setAuthorname] = useState("");
  const [symbol, setSymbol] = useState("");
  const [tokenPrice, setTokenPrice] = useState("");
  const [tokenQuantity, setTokenQuantity] = useState("");
  const [ noNFT, setNoNFT ] = useState("");
  const API_Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzOEQzNkJhOTIwOWU0NDhCMzZEOGYwNzQ2MzE4ZGFiNmUyNzUwQmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTk2ODIzNzc0NDUsIm5hbWUiOiJzdG9yeXBhZCJ9.YBGPQ1JxGs17x5IQ09mPazz85Fv07PK6puQmvhKxHCQ";
  const client = new Web3Storage({ token: API_Token });

  //---//
  const notify = () => alert("Files are uploaded!");

  //StoryPad
  const authorNameEvent = (e) => {
    setAuthorname(e.target.value);
  };
  const tokenPriceEvent = (e) => {
    setTokenPrice(e.target.value || null);
  };

  const tokenQuantityEvent = (e) => {
    setTokenQuantity(e.target.value);
  };
  const symbolEvent = (e) => {
    setSymbol(e.target.value);
  };
  //--------------

  
  async function onFormSubmit(e) {
    e.preventDefault();

    setAuthorname("");
    setTokenPrice("");
    setTokenQuantity("");
    setSymbol("");
    console.log(Item, "form submit");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const address = accounts[0];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(address);
    console.log(signature, "signture from onFormClick button");
    const storyMintContract = new ethers.Contract(
      mintParentContract,
      ContractABI.abi,
      signer
    );
    var options = { 
      gas: 2100000, gasPrice: 8000000000, value : tokenPrice
       };
       let wei;
    let transaction = await storyMintContract.createToken(authorname, symbol);
    console.log(transaction, "createToken");
    let tx = await transaction.wait();
    console.log(tx, "tx");
    let event = tx.events[0];
    console.log(event, "Event");
    // let tokenContractAddress = event?.address;
    let tokenContractAddress = event.args[1];
    console.log(tokenContractAddress, "TokenContractAddress");

    //IPFS
    const images = [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKaVAV_JOwMAqEUF5mSU1ax3a70PeREAbSw&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckSd1NpjK5Hsb_zx7Pl9Q6fKwxufBU3OOA&usqp=CAU",
        price: 0,
      },

      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKaVAV_JOwMAqEUF5mSU1ax3a70PeREAbSw&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckSd1NpjK5Hsb_zx7Pl9Q6fKwxufBU3OOA&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7DONgkBX5y8PuZSf6EO7UvlKiYHjBqghbg&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCJuDEcB8OSH8NQgncZWCp_IKdaIPZV-OxA&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKaVAV_JOwMAqEUF5mSU1ax3a70PeREAbSw&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckSd1NpjK5Hsb_zx7Pl9Q6fKwxufBU3OOA&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKaVAV_JOwMAqEUF5mSU1ax3a70PeREAbSw&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckSd1NpjK5Hsb_zx7Pl9Q6fKwxufBU3OOA&usqp=CAU",
        price: 0,
      },

      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKaVAV_JOwMAqEUF5mSU1ax3a70PeREAbSw&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckSd1NpjK5Hsb_zx7Pl9Q6fKwxufBU3OOA&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7DONgkBX5y8PuZSf6EO7UvlKiYHjBqghbg&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCJuDEcB8OSH8NQgncZWCp_IKdaIPZV-OxA&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKaVAV_JOwMAqEUF5mSU1ax3a70PeREAbSw&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckSd1NpjK5Hsb_zx7Pl9Q6fKwxufBU3OOA&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7DONgkBX5y8PuZSf6EO7UvlKiYHjBqghbg&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCJuDEcB8OSH8NQgncZWCp_IKdaIPZV-OxA&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKaVAV_JOwMAqEUF5mSU1ax3a70PeREAbSw&usqp=CAU",
        price: 0,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckSd1NpjK5Hsb_zx7Pl9Q6fKwxufBU3OOA&usqp=CAU",
        price: 0,
      },
    ];

    images.forEach(function (obj) {
       wei = ethers.utils.parseEther(tokenPrice.toString());
      obj.price = wei.toString()
      obj.seller = address
    });

    let tokenURI = [];

    for(let i = 0; i < tokenQuantity; i++){
      const blob = new Blob([JSON.stringify(images[i])], {
        type: "application/json",
      });
      const files = [new File([blob], "data.json")];
      console.log(files);
     
      const cid = await client.put(files);
      const url = `https://${cid}.ipfs.infura-ipfs.io/data.json`;
      console.log(url, 'url');
      tokenURI.push(url);

    }
    // images.map(async (img) => {

    //   const blob = new Blob([JSON.stringify(img)], {
    //     type: "application/json",
    //   });
    //   const files = [new File([blob], "data.json")];
    //   console.log(files);
     
    //   const cid = await client.put(files);
    //   const url = `https://${cid}.ipfs.infura-ipfs.io/data.json`;
    //   console.log(url, 'url');
    //   tokenURI.push(url);
    //   // console.log(tokenURI,'tokenURI')
    // });
console.log(tokenURI, "tokenURI");
    //-----
    await storyMintContract.bulkMintERC721(
      address,
      tokenContractAddress,
      0,
      tokenQuantity,
      tokenURI,
    );
  }

  let Item = {
    authorname: authorname,
    tokenPrice: tokenPrice,
    tokenQuantity: tokenQuantity,
    symbol: symbol,
  };

  return (
    <div
      style={{ backgroundColor: "#faf7f8", marginTop: "10%" }}
      className="col"
    >
      <div className="form-style-2 offset-4 row-8">
        <div className="form-style-2-heading">Upload any stories from here</div>
        <form action="" method="" onSubmit={onFormSubmit}>
          <label for="field1">
            <span>
              Name <span className="required">*</span>
            </span>
            <input
              value={authorname}
              onChange={authorNameEvent}
              placeholder="Your name"
              type="text"
              class="input-field"
              name="field1"
            />
          </label>{" "}
          <br />
          <label for="field1">
            <span>
              Symbol<span className="required">*</span>
            </span>
            <input
              value={symbol}
              onChange={symbolEvent}
              placeholder="Enter symbol"
              type="text"
              class="input-field"
              name="field1"
            />
          </label>{" "}
          <br />

          {/* <label for="field4"><span>Not NFT holder</span><select value={category} name="field4" onChange={(e)=>setNoNFT(e.target.value)} className="select-field">
                        <option defaultChecked defaultValue="free" value="free">Post story for free</option>
                        <option value="charge">Documents</option>

                    </select></label> */}

          <label for="field1">
            <span>
              tokenPrice <span className="required">*</span>
            </span>
            <input
              value={tokenPrice}
              onChange={tokenPriceEvent}
              placeholder="Enter a token price"
              type="text"
              class="input-field"
              name="field1"
            />
          </label>{" "}
          <br />
          <label for="field1">
            <span>
              tokenQuantity<span className="required">*</span>
            </span>
            <input
              value={tokenQuantity}
              onChange={tokenQuantityEvent}
              placeholder="Enter quantity"
              type="text"
              class="input-field"
              name="field1"
            />
          </label>
          <input
            type="submit"
            value="Submit"
            style={{ backgroundColor: "#D82148" }}
            onClick={notify}
          />
        </form>
      </div>
    </div>
  );
}

export default UploadForm;
