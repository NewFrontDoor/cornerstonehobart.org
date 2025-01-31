function showup(date, address){

}

(function ($) {
  "use strict;"

  $(document).ready(function() {

    // prevent the # links to scroll to the top of the page
    $("[href=#]").click(function(e) {
      e.preventDefault();
    });

    $("[data-toggle=popover]").popover();

    $("[data-toggle=tooltip]").tooltip();

    // flexslider
    $('.flex-bullet-slider').flexslider({
      slideshowSpeed: 10000,
      directionNav: false,
      animation: "fade"
    });

    $('.flex-arrow-slider').flexslider({
      slideshowSpeed: 5000,
      directionNav: true,
      controlNav: false,
      animation: "fade"
    });

    $('.vertical-center').flexVerticalCenter('padding-top');

    //Portfolio page functionalities
    $('#grid').mixitup();

    //Sticky Header
    if ($().waypoint) {
      $('header').waypoint('sticky', {
        offset: "-25px"
      });
    }

    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });

    $("#back-to-top").click(function () {
      $("html, body").animate({scrollTop: 0}, 300);
    });


    // Define the date and address
    const date = "THIS Sunday, the 2nd of February 2025";
    const address = "20 New Town Rd, New Town 7008";

    // Pop-up HTML structure
    const popupHtml = `
      <div id="popup-overlay" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 999;"></div>

      <div id="popup" style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        padding: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        text-align: center;
        display: none;
        z-index: 1000;">
        <p>Please note that <strong>${date}</strong>,<br>
        Cornerstone will be meeting at the Polish Club instead of our usual location.<br>
        The address is <strong>${address}</strong>.</p>
        <button id="popup-close" style="margin-top: 10px; padding: 5px 10px; cursor: pointer;">Close</button>
      </div>
    `;

    // Append the pop-up HTML to the body
    $("body").append(popupHtml);

    // Show pop-up on page load
    $("#popup, #popup-overlay").fadeIn();

    // Close pop-up on button click
    $("#popup-close, #popup-overlay").click(function () {
      $("#popup, #popup-overlay").fadeOut();
    });



  });

  $(window).load(function() {

    // Parallax
    if ($(window).width() >= 991 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
      $(window).stellar({
        horizontalScrolling: false,
        horizontalOffset: 0
      });
    }

    $(window).resize(function() {
      ($(window).width() < 991 || navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) ? $(window).stellar('destroy') : $(window).stellar({ horizontalScrolling: false, horizontalOffset: 0 });
    });

    // Google Maps Goodness
    if (document.getElementById('map_canvas')) {

      var gLatitude    = Drupal.settings['settings']['google_latitude'];
      var gLongitude   = Drupal.settings['settings']['google_longitude'];
      var gZoom        = Drupal.settings['settings']['google_zoom'];
      var gTitle       = Drupal.settings['settings']['google_title'];
      var gDescription = Drupal.settings['settings']['google_description'];

      var nestor_base_url = Drupal.settings['settings']['nestor_base_url'];

      var latlng = new google.maps.LatLng(gLatitude, gLongitude);

      var settings = {
        zoom: parseInt(gZoom),
        center: latlng,
        scrollwheel: false,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("map_canvas"), settings);

      var companyLogo = new google.maps.MarkerImage(nestor_base_url + '/img/google-maps/map-marker.png',
                                                    new google.maps.Size(20,30),
                                                    new google.maps.Point(0,0),
                                                    new google.maps.Point(10,30));

      var companyMarker = new google.maps.Marker({
        position: latlng,
             map: map,
            icon: companyLogo,
           title: gTitle
      });

      var contentString = '<div id="content-map">'+
                            '<h3 style="margin-top: 0px;">' + gTitle + '</h3>'+
                            '<p>' + gDescription + '</p>'+
                          '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      google.maps.event.addListener(companyMarker, 'click', function() {
        infowindow.open(map,companyMarker);
      });

    }

  });

})(jQuery);
