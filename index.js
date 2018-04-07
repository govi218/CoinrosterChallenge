bcypher = require('blockcypher');

var bcapi = new bcypher('btc','test3', 'dea4a0d80c0a4567a758e2f6daa49050');

function printResponse(err, data) {
  if (err !== null) {
    console.log(err);
  } else {
    console.log(data);
  }
}
bcapi.genAddr({}, printResponse);

bcapi.getAddrBal('mhVuC3GQzg7vBWqKU89QBZQy5xXC23SmTQ', {omitWalletAddresses: true}, printResponse);