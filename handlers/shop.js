const jsonp = require('then-jsonp');

const ETSY_API_KEY = require('../config/secret').ETSY_API_KEY;
const SHOP_NAME = 'The3DPrintStudio';
const ROOT_URL = 'https://openapi.etsy.com/v2';

exports.getShop = function(request, reply) {
  const url = `${ROOT_URL}/shops/${SHOP_NAME}.js?api_key=${ETSY_API_KEY}`;

  const result = jsonp('GET', url);
  result.done(function (res) {
    reply(res);
  });
}

exports.getAllListings = function(request, reply) {
  const url = `${ROOT_URL}/shops/${SHOP_NAME}/listings/active.js?api_key=${ETSY_API_KEY}`;

  const result = jsonp('GET', url);
  result.done(function (res) {
    reply(res);
  });
}

exports.getOneListing = function(request, reply) {
  const listing_id = request.params.listing_id;
  const url = `${ROOT_URL}/listings/${listing_id}.js?api_key=${ETSY_API_KEY}`;

  const result = jsonp('GET', url);
  result.done(function (res) {
    reply(res);
  })
}




// function getJsonP(url) {
//   return new Promise(function(resolve, object) {
//     jsonp(url, null, (err, data) => {
//       if (err) { reject(err); }
//
//       resolve(data);
//     });
//   });
// }
