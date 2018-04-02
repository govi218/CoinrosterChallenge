bcypher = require('blockcypher');

var bcapi = new bcypher('btc','test3','dea4a0d80c0a4567a758e2f6daa49050');

function printResponse(err, data) {
  if (err !== null) {
    console.log(err);
  } else {
    console.log(data);
  }
}
bcapi.createWallet({name: 'Alice', addresses:['mqJyQypCxG7hj8nrTyN1KbJRsJiu5WaKv9']}, printResponse);
bcapi.getAddrBal('mqJyQypCxG7hj8nrTyN1KbJRsJiu5WaKv9', {omitWalletAddresses: true}, printResponse);