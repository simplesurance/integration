var _sdbag = _sdbag || [];
 
_sdbag.push(['partnerId', 533184]); //replace it with your partner id
_sdbag.push(['shopId', 6537]); //replace it with your shop id
_sdbag.push(['country', 'jp']); //replace it with your customer's country code
 
_sdbag.push(['orderId', '32432432432']); // replace it with the order id
 
 // customer data
_sdbag.push(['customer', {
    firstname: '明',
    lastname: '黒澤',
    email: 'example@simplesurance.com',
    phone: '0815039142898',
    street: '市中央弁天２丁目１−10',
    street_number: '',
    zip: '260-0031',
	prefecture: '千葉県',
    city: '千葉',
    country: 'jp'
}]);

_sdbag.push(['attributePhoneticFirstname', 'あきら']);
_sdbag.push(['attributePhoneticLastname', 'くろさわ']);

// CONNECT TO JAPANESE STAGING SYSTEM - COMMENT OUT FOR PRODUCTION
_sdbag.push(['baseUrl', 'https://jsapi-stg.simplesurance.co.jp/v2/']);

// CONNECT TO JAPANESE PRODUCTION SYSTEM - COMMENT IN FOR PRODUCTION
//_sdbag.push(['baseUrl', 'https://jsapi.simplesurance.co.jp/v2/']); 

// COMMENT OUT IF YOU WANT TO WORK ON SANDBOX (PARTNER ID AND SHOP ID VALUES WILL BE DIFFERENT)
//_sdbag.push(['sandbox', true]);
 
// COMMENT OUT IF YOU WANT TO SEE DEBUG OUTPUT IN BROWSER'S JS CONSOLE. DO NOT ACTIVATE THIS IN PRODUCTION USE
//_sdbag.push(['debug', true]);

// This indicates which page you are initializing the plugin. Use 'success' for success page.
_sdbag.push(['page', 'success']);

_sdbag.push(['init', 'success']);
 
(function() {
    var ss = document.createElement('script'); ss.type = 'text/javascript'; ss.async = true;
    ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://')  + 'jsapi.simplesurance.co.jp/sisu-checkout-2.x.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ss, s);
})();
