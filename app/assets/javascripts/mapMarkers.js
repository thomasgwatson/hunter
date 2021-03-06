var d3ToMap = {}

d3ToMap.numRand = function(limit){
  return Math.floor(Math.random()*limit);
}

d3ToMap.mapCoords = function(){
  return Math.floor(graffMap.map.getCenter().lat()) + '/' + Math.floor(graffMap.map.getCenter().lng())
}

var entry = (function(){
  // var _link = function(entry) { return entry.url; };
  var _lat = function(entry) { return entry.lat; };
  var _lon = function(entry) { return entry.lng; };
  var _prox = function(entry) { return entry.prox; };
  // var _created = function(entry) { return entry.posted_at; };
  // var _thumbnail = function(entry) { return entry.thumbnail_url; };

  var f = {};

  // f.link      = _link;
  f.lat       = _lat;
  f.lon      = _lon;
  f.prox     = _prox;
  // f.created   = _created;
  // f.thumbnail = _thumbnail;

  return f;
}());
////////////////////////////////////////////////////////

d3ToMap.applyd3ToMap = function(data){
    console.log(data)
    var overlay = new google.maps.OverlayView();

    overlay.onAdd = function() {

      var layer = d3.select(this.getPanes().overlayMouseTarget)
          .append("div")
          .attr("class", "graffiti");

      overlay.draw = function() {
        var projection = this.getProjection(), padding = 10;

        var marker = layer.selectAll("svg")
                          .data(data)
                          .each(transformMarker)
                          .enter().append("svg:svg")
                          .each(transformMarker)
                          .on('mouseover', scatter);

        marker.append("svg:rect")

              .attr("height", 6)
              .attr("width", 6)
              .attr('fill', function(d){
                var colour = d3.scale.linear()
                                     .domain([0, 100])
                                     .range(["#0C5244", "#1ED6B1"]);
                return colour(entry.prox(d)/4 + 5);
              })
              .attr("stroke", "#0f0f02")
              .attr("stroke-width", 0.5)

              console.log(graffMap.map.zoom)

        function transformMarker(d) {
          d = new google.maps.LatLng(entry.lat(d), entry.lon(d));
          d = projection.fromLatLngToDivPixel(d);
          return d3.select(this)
              .style("left", (d.x) + "px")
              .style("top", (d.y) + "px");
        }

        function scatter(d){
          d = new google.maps.LatLng(entry.lat(d), entry.lon(d));
          d = projection.fromLatLngToDivPixel(d);
          d3.select(this)
            .transition()
            .duration(2000)
            .style("left", (d.x + (d3ToMap.numRand(301) - 150)) + "px")
            .style("top", (d.y + (d3ToMap.numRand(301) - 150)) + "px")
            .transition()
            .delay(12000)
            .duration(2000)
            .style("left", (d.x) + "px")
            .style("top", (d.y) + "px")
        }

      };
    };
  overlay.setMap(graffMap.map);
}

$(document).ready(function(){
  if ( $('#map').length ){
    var url = graffMap.data_url + d3ToMap.mapCoords()
    d3.json(url, function(data){
      d3ToMap.applyd3ToMap(data)
    })
  }
})
