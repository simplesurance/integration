var _sdbag = _sdbag || [];
 
_sdbag.push(['partnerId', 533184]); //replace it with your partner id
_sdbag.push(['shopId', 6537]); //replace it with your shop id
_sdbag.push(['country', 'jp']); //replace it with your customer's country code
 
 // Products in customer's shopping cart
_sdbag.push(['products', [
    {
        id: 1,
        categories: [{23: "Smartphones"}],
        name: "iPhone XR",
        price: "97944",
        currency: "JPY",
        sku: "0000001",
        qty: 1
    },
    {
        id: 1,
        categories: [{123: "Smartphone Accessories"}],
        name: "iPhone XR Cover",
        price: "1200",
        currency: "JPY",
        sku: "0000002",
        qty: 1
    }
]]);
 
// COMMENT OUT IF YOU WANT TO WORK ON SANDBOX (PARTNER ID AND SHOP ID VALUES WILL BE DIFFERENT)
//_sdbag.push(['sandbox', true]);
 
// COMMENT OUT IF YOU WANT TO SEE DEBUG OUTPUT IN BROWSER'S JS CONSOLE. DO NOT ACTIVATE THIS IN PRODUCTION USE
//_sdbag.push(['debug', true]);

// This indicates which page you are initializing the plugin. Use "cart" if it's shopping cart page, or "checkout" for checkout page
_sdbag.push(['page', 'checkout']);
 
_sdbag.push(['init', 'checkout']); // When the "page" parameter set to "cart" or "checkout", "init" parameter has to have "checkout" value.

 
(function() {
    var ss = document.createElement('script'); ss.type = 'text/javascript'; ss.async = true;
    ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://')  + 'www.simplesurance.co.jp/jsapi/sisu-checkout-2.x.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ss, s);
})();