var g = G$('ben', 'watee');
console.log(g);
g.greet().setLang('es').greet(true).log();

$('#login').click(function() {
    var loginGreetr = G$('Ben', 'Watee');

    $('#logindiv').hide();

    loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});