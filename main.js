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
  $("[type='checkbox']").on("click", function(e){
    console.log("FIRE! (movie theater is empty)");
    $(".law").removeClass("active");

    $("[type='checkbox']:checked").each(function(){
      console.log("Checked");
        var this_box = $(this),
          id = this_box.data("id");


        $("#" + id).addClass("active");
    });
  });


  function format(n, currency) {
    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }
});
