// Script neces�rio para corre��o de problema referente a campos monet�rios em real
// Faz com que valores digitados com v�rgula passem para o lado servidor (C#) com ponto no lugar da v�rgula 

$.validator.methods.range = function (value, element, param) {
var globalizedValue = value.replace(".", "").replace(",", "."); 
return this.optional(element) || (globalizedValue >= param[0] && globalizedValue <= param[1]);
}
 
$.validator.methods.number = function (value, element) {
return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:[\s\,]\d{3})+)(?:[\,]\d+)?$/.test(value);
}