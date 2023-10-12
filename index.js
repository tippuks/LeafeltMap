

    var map = L.map('map').setView([17.31437299307749, 78.46847035721423], 10);

    //OSM TILE LAYER
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors; Created By <a href= "https://github.com/tippuks">Tippu K S</a> '
    }).addTo(map);
    
    // // CUSTOM TILE LAYER
    // L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
    //     maxZoom: 20,
    //     attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Created By <a href= "https://github.com/tippuks">Tippu K S</a>'
    // }).addTo(map);
    
    L.marker([17.31437299307749, 78.46847035721423],{
        title:'Marker',
        // 
    }).addTo(map)
        .bindPopup('Home Town')
        .openPopup();
        
    
    var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
    var polygon = L.polygon(latlngs, {color: 'red',fillColor:'yellow',fillOpacity:1}).addTo(map);
    // zoom the map to the polygon
    // map.fitBounds(polygon.getBounds());
    
    // Marker with draggable option and events
    var dragMarker = L.marker([29.986174,79.785845],{
        title:'This is a random location',
        opacity:0.5,
        draggable:true
    })
    
    // Add marker to map
    dragMarker.addTo(map)
        
    dragMarker.on('dragstart', function(evt){
        console.log('just started dragging!')
        console.log(evt)
    })
    
        
    dragMarker.on('dragend', function(evt){
        console.log('just finished dragging!')
        console.log(evt)
    })
