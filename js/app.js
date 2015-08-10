

    $.ajax({ 
    type: 'GET', 
    url: 'https://ideopass.com/shapeshift.php', 
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