var n = 0;
var time =null;
var count ;
$(function(){
  count = $(".rotation a").length;
  $(".rotation a:not(:first-child)").hide();
  $(".rotation ul li").on("click",function(){
    var index = $(this).text()-1;
    n = index;
    console.log(n);
    $(".rotation a").filter(":visible").fadeOut(500).parent().children().eq(index).fadeIn(500);
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
  });
  time = setInterval("t()",5000);
  $(".rotation").hover(
    function(){ clearInterval(time)},
    function(){time = setInterval("t()",5000)}
  );
});
function t(){
if(n>=(count-1)){
n=0;
}else{
++n;
}
  $(".rotation ul li").eq(n).trigger("click");
}


