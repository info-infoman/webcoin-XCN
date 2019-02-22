// blockchain definition

var u = require('bitcoin-util')

/* const MAX_MONEY =1

u.SetBalance(u.coinbase, MAX_MONEY) */

//Build a single trienode to find the hash of the coinbase only trie
/* TrieNode *coinbase = new TrieNode(NODE_LEAF);
	coinbase->SetKey(0);
	coinbase->SetBalance(txNew.vout[0].nValue);

	genesis.hashAccountRoot = coinbase->Hash(); */ //TODO: get the trie hash
	
// definition of the genesis block's header
var genesisHeader = {
  height: 0,
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('9dabd47e692ed615eae95da0c95f195a7dea9428bb9f9e0cd4c7d12533bf3667'),
  timestamp: 1406509200,
  bits: 0x1d00ffff,
  nonce: 1041215929,
// TODO add trie init
  hashAccountRoot: u.nullHash
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    /* version: 536870912,
    prevHash: Buffer.from('6b05bd2c4a06b3d8503a033c2593396a25a79e1dcadb14000000000000000000', 'hex'),
    merkleRoot: Buffer.from('1b08df3d42cd9a38d8b66adf9dc5eb464f503633bd861085ffff723634531596', 'hex'),
    timestamp: 1548657313,
    bits: 389048373,
    nonce: 716662719,
    height: 560448 */
  }
]

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader,
  checkpoints
}
