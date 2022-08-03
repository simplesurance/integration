window._sdbag = {
    shop: {
        id: '15e36b012c17486e88df40e4961fe058',
        country: 'DE',
        language: 'EN',
        currency: 'EUR',
    },
    page_type: 'SUCCESS',
    customer: {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        phone: '+49 (30) 00000000',
        address: {
            street: 'Am Karlsbad',
            house_number: '16',
            zip_code: '10785',
            city: 'Berlin',
            country: 'de',
            tax_number: '23296684F', // Required for the following countries: Portugal, Spain, Italy.
        },
    },
    order_id: '3243243',
}
 
(function() {
    var ss = document.createElement('script'); ss.type = 'text/javascript'; ss.async = true;
    ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://')  + 'x-sell-plugin.simplesurance.de/bundle.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ss, s);
})();
