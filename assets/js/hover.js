$(".spanhover").hover(function(event) {
    var rect = document.getElementById("lyrics").getBoundingClientRect();
var doc = document.documentElement;
var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
var divid = "#popup" + $(this).attr("id")
$(divid).css({top: top + event.clientY + 35, right: 10}).show();
}, function() {
var divid = "#popup" + $(this).attr("id")
$(divid).hide();
});