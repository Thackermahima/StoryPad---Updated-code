// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// import "./comman/ERC721.sol";

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract mintContract is  ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    mapping(uint256 => MarketItem) public marketItems;

   struct MarketItem {
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
    }


     event MarketItemCreated(
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner
    );

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    function safeMint(address to, string memory tokenURI) public {
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
         marketItems[tokenId] = MarketItem(
            address(this),
            tokenId,
            payable(to),
            payable(address(0))
        );

        emit MarketItemCreated(
            address(this),
            tokenId,
            to,
            address(0)
        );
        _tokenIdCounter.increment(); 
    }

    function transferTokens(
        address from,
        address payable to,
        address token,
        uint256 amount
    ) public {
        if (token != address(0)) {
            IERC721(token).transferFrom(from, to, amount);
        } else {
            require(to.send(amount), "Transfer of ETH to receiver failed");
        }
    }
}