// CART + CHECKOUT

window._sdbag = {
        shop: {
          id: '123dcfg1312', //Provided by Simplesurance
          country: 'DE',
          language: 'DE',
          currency: 'EUR',
        },
        cart: [
          {
            price: {
              currency_code: 'EUR',
              amount: '10',
            },
            quantity: 1,
            category_chain: [{ id: '2', name: 'Iphone 12' }],
            criteria: [],
            variables: [
              { value: 'Hummingbird printed t-shirt', variable: 'ITEM_NAME' },
              { value: '1', variable: 'ITEM_ID' },
            ],
          },
        ],
        page_type: 'CART', // Just replace the value to CHECKOUT if you are in the checkout page.
      }
 
(function() {
    var ss = document.createElement('script'); ss.type = 'text/javascript'; ss.async = true;
    ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://')  + 'x-sell-plugin.simplesurance.de/bundle.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ss, s);
})();
