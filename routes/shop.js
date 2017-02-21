const shopHandler = require('../handlers/shop');

module.exports = [
  {
    method: 'GET',
    path: '/shop',
    handler: shopHandler.getShop
  },
  {
    method: 'GET',
    path: '/shop/listings',
    handler: shopHandler.getAllListings
  },
  {
    method: 'GET',
    path: '/shop/listings/{listing_id}',
    handler: shopHandler.getOneListing
  }
]
