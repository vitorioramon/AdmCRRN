$(document).ready(function () {

    $(".telefone input[type='text']").mask("(99)9999-9999");
    $(".data input[type='text']").mask("99/99/9999");

    // Configuração para campos de Real.
    $(".moeda-real input[type='text']").maskMoney({ showSymbol: true, symbol: "", decimal: ",", thousands: "", allowZero: true });
});