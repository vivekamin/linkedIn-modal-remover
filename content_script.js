$(document).ready(function(){

  var y = $('div')
  .filter(function() {
      return this.id.match(/.*modal.*/)
  })
  .first()[0]/*.css("display", "none")*/;
  y.setAttribute("style", "display:none !important");
  // if(!status){
  //   var z = $('div')
  //   .filter(function() {
  //
  //       return this.className.match(/.*modal.*/);
  //     // else
  //     //   return this.className.match(/.*modal.*/);
  //   })/*.css("display", "none")*/;
  //   z[0].setAttribute("style", "display:none !important");
  //   for (i = 0; i < z.length; i++){
  //     z[i].setAttribute("style", "display:none !important");
  //   }
  // }
  //z.setAttribute("style", "display:none !important");
  //$('body').css('overflow', 'auto !importamt');   this is not working

  document.getElementsByTagName("body")[0].setAttribute("style", "overflow:auto !important");

  console.log($('body'));


});
