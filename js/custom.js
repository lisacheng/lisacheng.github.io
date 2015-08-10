$(function(){
     $.getJSON("https://www2.shapeshift.io/crowdsales", function (json) {
         console.log(json);
        var soldT = Math.round(json.sold);
        var left = json.remaining;
        var total = Math.round(soldT+left);
        var ratebtc = json.rateT;
        var percent = Math.round(soldT/total*100);
        var backers = json.orders;
        var raised = Math.round(json.raised);
        var raisedtotal = raised + ' BTC';
        var goal = Math.round((raised/730) * 100);

        var percentsold = Math.round(percent) + '%';
        var backers = json.orders + ' backers';
        var funded = Math.round(raised/730*100);
        $('.progress-bar').css('width', percentsold);

        $('.ratebtc').html(ratebtc );  
        $('.backers').html(raisedtotal + " from " + backers );
        $('.progress-bar-success').css('width', goal + '%');
        $('.goal-label').html(raisedtotal + " towards goal of 730 BTC (" + soldT + " out of " + total + " BCY)");
        $('.funded-label').html(funded + " % Funded");
    }); 
    
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

var nextYear = moment.tz("2015-09-03 01:00", "ETC/UTC");

$('#clock').countdown(nextYear.toDate(), function(event) {
  $(this).html(event.strftime('The token sale ends in\n %D Days, %H Hours, %M Minutes, and %S Seconds'));
});


