$(document).ready(function(){
  $(".calculate").click(function (){
    var totalCost=0;
      $("input").each(function(){
        if($(this).prop('checked')){
          var thisCost = parseFloat($(this).val());
          totalCost=totalCost + thisCost;
        }
      });
      // var filter = $(this).val();
//var totalCostMoneyFormat = format(totalCost,"$");
//console.log(totalCostMoneyFormat);
$(".TotalFines").find("span").text(format(totalCost, "$"));
    //  $(".item.active").removeClass("active");
      //$("." + filter).addClass("active");
  });
  function format(n, currency) {
    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }
});
