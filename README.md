# CoinrosterChallenge
Quick and dirty Node.js app to check a testnet address and conduct transactions

# Instructions
1. After cloning this, run `npm install` from the root directory.
2. Fill in the required details in `index.js`.
    - Getting an API key is as simple as making a blockcypher account
    - To generate an address, you can also run `node address.js`, which is a simple address generator
    - Ideally, two addresses are generated and one is filled from a faucet(such as https://testnet.manu.backend.hamburg/faucet)
3. Run `node index.js` and the result of the transaction will be displayed as a JSON object