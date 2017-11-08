var g = G$('John', 'Doe');



$('#login').click(function(){
    g.setLang($('#lang').val());
    g.HTMLGreeting('#greeting', 'formal');

});