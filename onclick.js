$(document).ready(function(){
  //console.log("asd");
  var y = $('div')
  .filter(function() {
      return this.id.match(/.*modal.*/)
  })
  .first()[0]/*.css("display", "none")*/;
  y.setAttribute("style", "display:none !important");

  document.getElementsByTagName("body")[0].setAttribute("style", "overflow:auto !important");

});
