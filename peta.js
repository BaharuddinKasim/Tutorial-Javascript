function initialize(){
    var propertiPeta ={
        center:new google.maps.LatLng(-2.589778, 120.805393),
        zoom:7,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);
}

//event jendela di load
google.maps.event.addDomListener(window, 'load', initialize);