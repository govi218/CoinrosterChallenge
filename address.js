var bcypher = require('blockcypher');

/* YOUR DATA GOES HERE */
var bcapi = new bcypher('btc','test3', BLOCKCYPHER_API_TOKEN);

bcapi.genAddr({}, function (err, data) {
    if(err) {
        console.log(err);
    }
    console.log(data);
})