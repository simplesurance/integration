window._sdbag = {
    shop: {
        id: '9', // Replace it with your Shop ID
        country: 'DE', // ISO 3166-1 Country Code
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
            category_chain: [{ id: '2', name: 'Smartphones' }],
            criteria: [
                {
                    criterion: 'EAN',
                    value: 'ABC123',
                },
            ],
            variables: [
                { variable: 'ITEM_NAME', value: 'Apple iPhone 11 Pro 256GB' },
                { variable: 'ITEM_ID', value: '15608' },
            ],
        }
    ],
    page_type: 'CHECKOUT'
}

 
(function() {
    var ss = document.createElement('script'); ss.type = 'text/javascript'; ss.async = true;
    ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://')  + 'jsapi.simplesurance.de/sisu-checkout-2.x.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ss, s);
})();
