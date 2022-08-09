// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./mintContract.sol";

contract mintContractParent is Ownable {
    
    

    event TokenCreated(address, address);
    event TokenTransfered(address, address, address, uint256);



  

    function createToken(string memory name, string memory symbol) public {
        address _address = address(new mintContract(name, symbol)); // Created Token contract.

        emit TokenCreated(msg.sender, _address);
    }

    function bulkMintERC721(
        address mintor,
        address tokenAddress,
        uint256 start,
        uint256 end,
        string[] memory tokenURI
    ) public {
        for (uint256 i = start; i < end; i++) {
            mintContract(tokenAddress).safeMint(mintor, tokenURI[i]); //for null address issue, we changed safeMint(msg.sender) to mintor
        }
    }

    function transferToken(
        address from,
        address payable to,
        address token,
        uint256 amount
    ) public {
        mintContract(token).transferTokens(from, to, token, amount);
        emit TokenTransfered(from, to, token, amount);
    }
   

}


