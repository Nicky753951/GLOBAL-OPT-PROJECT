document.addEventListener("DOMContentLoaded", () => {
  function initMap(){ 
    var element = document.getElementById("map");
    var options = {
      zoom: 15,
      center: {lat: 55.7481, lng: 37.6271}
    };
    var image = 'icons/marker.png';

    var myMap = new google.maps.Map(element, options);

    var marker = new google.maps.Marker({
      position: {lat: 55.7481, lng: 37.6271},
      map: myMap,
      icon: image
    });

    // var InfoWindow = new google.maps.InfoWindow({
    //   content: "<div class='address'> <p class='address__city'>г. Москва</p> <p class='address__street'>ул. Садовническая, дом 5,офис 4-6, 700 от м. Новокузнецкая</p> <p class='address__tel'>Тел: +7 (926) 423 01 00</p> <p class='address__email'>info@glopt.ru</p></div>"
    });

    InfoWindow.open(myMap, marker);
  }
});