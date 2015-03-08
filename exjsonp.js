
$(document).ready(function() { 
 //http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada&tagmode=any&format=json&jsoncallback=?
 $("#button").click(function(){
   console.log($("input").val());
   var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?&jsoncallback=?";
   $.getJSON(flickerAPI, {
     tags: $("input").val(),
     tagmode: "any",
     format: "json"
   })
   .done(function(data) {
    imagenes = '<ul>'
    for (var i = 0; i < 5; i++) {
        imagenes = imagenes + '<br></br>' + '<li>Título: ' + data.items[i].title + '</li><br>' + '<li>Descripción: ' + data.items[i].description + '</li>';
    }
    imagenes = imagenes + '</ul>';
    $("#images").html(imagenes);
   });
  });
});
