module.exports = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x28,
  scriptHash: 0x05,
  wif: 0x80,
  dustThreshold: 546 // https://github.com/bitcoin/bitcoin/blob/v0.9.2/src/core.h#L151-L162
}
