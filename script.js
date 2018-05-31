'use strict';

var model = {
  geld: 7,
};

onload = () => {
  octopus.init();
}

var octopus = {
  init: () => {
    startView.init();
  }
}

var startView = {
  init: () => {
    this.marketElem = document.getElementById('verkauf');
    fightView.hide();
    menuView.hide();
  }
}

var fightView = {
  init: () => {
    this.fightElem = document.getElementById('fight');
  },
  hide: () => {
    
  }
}

var menuView = {
  hide: () => {
    
  }
}

$(document).ready(function() {
  $('#verkauf').hide(0)
  $('.kampf-szene').hide(0)
  $('.menue').hide(0)
});

/* Menü anzeigen */
$(function() {
  $('#spiel-starten').click(function () {
    $('.menue').show(0)
    $('.start-szene').hide(0)
  });
});
$(function() {
  $('#linsen').click(function() {
     $('html').click(function(event) {
     var y = (Math.round(event.pageX / 16)* 16);
     var x = (Math.round(event.pageY / 16)* 16);
     $('#linsen').css("left", y + 'px')
     $('#linsen').css('top', x + 'px')
    });
  });
  $('#verkauf-oeffnen').click(function() {
    $('#verkauf').show();
  });

  $('#exit').click(function (){
    $('#verkauf-oberflaeche').fadeOut();
  });
});

$("#menue-oeffnen").click(function() {
  $("#pMenu").fadeToggle()
  $("#pPlay").fadeToggle()
});

$(function() {
  $("#kampf-starten").click(function () {
    $(".kampf-szene").fadeIn(0)
    $(".menue").fadeOut(0)
  });
});

$(function() {
  $("#kaufen").click(function () {
    if(geld >= 0){
      alert("Dieser Artikel wurde gekauft du hast noch " + geld + " Taler");
      geld -= 5;
    } else {
      alert("Du hast leider nicht genug Geld")
    }
  });
});

$(function() {
  $("#verkauf-schliessen").click(function () {
    $("#verkauf").hide(0);
  });
});