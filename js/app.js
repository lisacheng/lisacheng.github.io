

    $.ajax({ 
    type: 'GET', 
    url: 'https://www2.shapeshift.io/crowdsales', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
            $('body').append($('<div>', {
                text: element.name
            }));
        });
    }
});