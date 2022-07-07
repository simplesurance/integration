// CART + CHECKOUT

// Partner data 
_sdbag.push(['shop', [ 
    {
		'shopId': e46adcde345f476183b25ea65b636fd0, //replace it with the shop id provided by simplesurance
		'country': DE, //replace it with your user's country code
		'language': EN, //replace it with the language code selected by the user in your shop
		'currency': EUR, // replace it with the currency code selected by the user in your shop
    },
]]);
 
 // Items in customer's shopping cart
_sdbag.push(['products', [
    {
        id: 1,
        categories: [{id: "2", name: "Home"}, {id: "6", name: "Mobile electronics"}, {id: "7", name: "Smartphones"}],
        name: 'iPhone 13',
        price: '690.00',
        currency: 'EUR', // replace it with the currency code
        sku: 'UGGBBPUR061', // optional
        ean: '9781405322274', // optional
        qty: 1
    },
    {
        id: 2,
        categories: [{id: "2", name: "Home"}, {875: 'Smartphone Accessories'}],
        name: 'iPhone 5S Cover',
        price: '59.99',
        currency: 'EUR', // replace it with the currency code
        sku: '0000002', // optional
        ean: '9781405322274', // optional
        qty: 1
    }
]]);

// This indicates which page you are initializing the plugin. Use 'cart' if it's shopping cart page, or 'checkout' for checkout page
_sdbag.push(['page_type', 'cart']);
 
_sdbag.push(['init', 'checkout']); // When the 'page' parameter set to 'cart' or 'checkout', 'init' parameter has to have 'checkout' value.

 
(function() {
    var ss = document.createElement('script'); ss.type = 'text/javascript'; ss.async = true;
    ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://')  + 'x-sell-plugin.simplesurance.de/bundle.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ss, s);
})();
