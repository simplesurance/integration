// CONFIRMATION PAGE

window._sdbag = {
      shop: {
        id: '65465jgb', //Provided by Simplesurance
        country: 'DE',
        currency: 'EUR',
        language: 'DE',
      },
      orderId: '342sfvds',
      page_type: 'SUCCESS', // Needs to be in capital letters
      customer: {
        first_name: 'John',
        last_name: 'Doe',
        address: {
          city: 'Berlin',
          country: 'DE',
          house_number: '16',
          street: 'Am Karlsbad',
          zip_code: '10627',
        },
        email: 'john.doe@simplesurance.de',
        tax_number: '12312321', //Mandatory for IT,ES and PT
        phone_number: '+4917484546'
      }
}

// This indicates which page you are initializing the plugin. Use "success" for success page.

      
(function() {
    var ss = document.createElement('script'); ss.type = 'text/javascript'; ss.async = true;
    ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://')  + 'x-sell-plugin.simplesurance.de/bundle.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ss, s);
})();
