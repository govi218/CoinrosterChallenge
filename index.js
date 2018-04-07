var bcypher = require('blockcypher');
var bitcoin = require('bitcoinjs-lib');
var bigi = require('bigi');
var buffer  = require('buffer');

/* YOUR DATA GOES HERE */
var bcapi = new bcypher('btc','test3', BLOCKCYPHER_API_TOKEN);
var sendAddr = SENDER_ADDRESS;
var recAddr = RECEIVER_ADDRESS;

var senderPvtKey = SENDER_PRIVATE_KEY;

// prints output
function printResponse(err, data) {
  if (err !== null) {
    console.log(err);
  } else {
    console.log(data);
  }
}

// prints the final balance of sender address
bcapi.getAddrBal(sendAddr, {omitWalletAddresses: true}, function(err, data) {
  console.log('The wallet '+ sendAddr + ' contains:' +  data.final_balance + ' satoshi (' + data.final_balance * 0.00000001 + 'BTC)');
});

// defining transaction options
var newtx = {
  inputs: [{addresses: [sendAddr]}],
  outputs: [{addresses: [recAddr], value: 10000}]
};
var keys    = new bitcoin.ECPair(bigi.fromHex(senderPvtKey));

// get transaction skeleton
bcapi.newTX(newtx, function(err,data) {
  if(err) {
    console.log(err);
  }
  // sign transactionandadd public key
  data.pubkeys = [];
  data.signatures = data.tosign.map(function(tosign, n) {
    
    data.pubkeys.push(keys.getPublicKeyBuffer().toString("hex"));
    return keys.sign(new buffer.Buffer(tosign, "hex")).toDER().toString("hex");
  });
  // finally, post the transaction on the network
  bcapi.sendTX(data, printResponse);
});
