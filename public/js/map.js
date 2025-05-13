mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
            container: "map", // container ID
            style: "mapbox://styles/mapbox/streets-v12", //style url
            center:JSON.parse(coordinates) , // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 9, // starting zoom
    });

 // console.log(listing.geometry.coordinates);
   const marker = new mapboxgl.Marker({ color: "red"})
      .setLngLat(JSON.parse(coordinates))
      .setPopup(new mapboxgl.Popup({offset: 25})
      .setHTML("<p>Exact location provided after booking</p>"))
       .addTo(map);


