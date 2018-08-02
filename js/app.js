$(document).ready(function(){
   var dibujarGifs=function(data){
    var gif ="";
    var url = "";
    data.forEach(function(element) {
        gif=element.images.downsized_large.url;
        url=element.bitly_gif_url;
        $("#elementos").append(armarTemplate(gif,url));
    });
  }

var armarTemplate = function(gif,url){
    var t = "<div class='elemento format-images row'><img col-lg-s6 src='"+gif +"'/><a class='format-link' href='"+url+"'><h2>ver mas</h2></a></div"
    return t;
}

var ajaxGif= function(gif){
    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search',
        type:'GET',
        datatype:'json',
        data:{
            q:gif,
            api_key:'RaC4BnYtuyTMdT6YPOQe3KJCP4qoQtsI'
        }
    })
    .done(function(response){
        console.log(response);
        dibujarGifs(response.data);
    })
    .fail(function(){
        console.log("error");
    })
}

$("#buscar-gif").click(function(event){
    console.log("entro");
    $("#elementos").empty();
    var gif=$("#gif-text").val();
    ajaxGif(gif);
    });
});