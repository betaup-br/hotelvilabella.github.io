function init_map() {
    var var_location = new google.maps.LatLng(-22.84577,	-45.23368);
    var var_mapoptions = {
      center: var_location,
      zoom: 17
  };
  var var_marker = new google.maps.Marker({
    position: var_location,
    map: var_map,
    title:"Hotel Vila Bella"});
  var var_map = new google.maps.Map(document.getElementById("map-container"),
    var_mapoptions);
  var_marker.setMap(var_map);  
  $("body").css("display", "inline");
}
google.maps.event.addDomListener(window, 'load', init_map);