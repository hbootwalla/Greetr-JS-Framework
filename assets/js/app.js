var g = G$('John', 'Doe');

$('#login').click(function(){
    g.setLang($('#lang').val()).HTMLGreeting('#greeting', $('#type').val());
});