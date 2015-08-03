/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
$.get( "http://www2.shapeshift.io/crowdsales", function( data ) {
    var sold = data['sold'];
    var left = data['remaining'];
    var total = sold + left;
    var ratebtc = data['rateT'];
//    var percentsold = sold/total + '%';
    var percentsold = 20 + '%';
    $('.progress-bar').css('width', percentsold); 
    $('.percentage-label').html( percentsold + " \(" + sold + " sold out of " + total + " \)");
    $('.ratebtc').html( ratebtc );
}); 

function openPrivModal(){
    "use strict";
    $('#privModal').modal('show');
 }
 function openTermsModal(){
    "use strict";
    $('#termsModal').modal('show');
 }

function opentac(){
swal({
html:true,
title: "Do You Accept the Terms and Conditions?",
text: "By procceding you acknowledge that you have read and understand the <a href='pdf/BitCrystalsTokenSaleTerms.pdf'>Terms</a> and <a href='pdf/BitCrystalsTokenSaleAgreement.pdf'>Conditions</a>",
type: "info",   showCancelButton: true,
confirmButtonText: "Proceed",
closeOnConfirm: false },
function(){
window.open("crowdsale/index.html","_self");
});
}
