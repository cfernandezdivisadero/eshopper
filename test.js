console.log('Creado desde GIT from Develop');

jQuery('.add-to-cart').on('click', function() {
    var name = jQuery(this).parent().find('p').text();
    var id = Math.floor(Math.random()*1000);
     utag.link({
        product_ids: [id],
        product_names: [name],
        accionEcommerce: 'add'
    }, function(){}, [5]);
});


console.log('Funciona!!!');