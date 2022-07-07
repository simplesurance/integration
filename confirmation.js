_sdbag.push(['shop', [
    {
  'shopId': e46adcde345f476183b25ea65b636fd0, //replace it with the shop id provided by simplesurance
  'country': DE, //replace it with your user's country code
  'language': EN, //replace it with the language code selected by the user in your shop
  'currency': EUR, // replace it with the currency code selected by the user in your shop
    },

_sdbag.push(['orderId', '32432432432']); // replace it with the customer's order id

// customer data
_sdbag.push(['customer', {
    firstname: "John",
    lastname: "Smith",
    email: "dadsadsda@example.com",
    phone: "+49 (30) 00000000",
    street: "Hallesches Ufer",
    street_number: 60,
    zip: 10963,
    city: "Berlin",
    country: "DE", //replace it with your user's country code
    taxnumber: "", // mandatory for IT, ES and PT
}]);

// This indicates which page you are initializing the plugin. Use "success" for success page.
_sdbag.push(['page_type', 'success']);

_sdbag.push(['init', 'success']);
 
(function() {
    var ss = document.createElement('script'); ss.type = 'text/javascript'; ss.async = true;
    ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://')  + 'x-sell-plugin.simplesurance.de/bundle.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ss, s);
})();
