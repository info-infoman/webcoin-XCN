var params = require('webcoin-params')

module.exports = params({
  blockchain: require('./src/blockchain.js'),
  net: require('./src/net.js'),
  wallet: require('./src/wallet.js'),
  versionbits: require('./src/versionbits.js')
})
