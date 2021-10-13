var data = [
  { name: "Ana", n1: Math.floor(Math.random() * (65 - 0)), n2: 80, c: "#708BB4" },
  { name: "Bastion", n1: Math.floor(Math.random() * (65 - 0)), n2: 82, c: "#7C907A" },
  { name: "D.Va", n1: Math.floor(Math.random() * (65 - 0)), n2: 84, c: "#EF95CA" },
  { name: "Doomfist", n1: Math.floor(Math.random() * (65 - 0)), n2: 84, c: "rgba(51,51,51,.9)" },
  { name: "Genji", n1: Math.floor(Math.random() * (65 - 0)), n2: 82, c: "#A7F061" },
  { name: "Hanzo", n1: Math.floor(Math.random() * (65 - 0)), n2: 78, c: "#AEA981" },
  { name: "Junkrat", n1: Math.floor(Math.random() * (65 - 0)), n2: 80, c: "#ECBE52" },
  { name: "Lúcio", n1: Math.floor(Math.random() * (65 - 0)), n2: 82, c: "#95CD6D" },
  { name: "McCree", n1: Math.floor(Math.random() * (65 - 0)), n2: 80, c: "#B15A5D" },
  { name: "Mei", n1: Math.floor(Math.random() * (65 - 0)), n2: 84, c: "#6BAAEA" },
  { name: "Mercy", n1: Math.floor(Math.random() * (65 - 0)), n2: 81, c: "#ECEABC" },
  { name: "Orisa", n1: Math.floor(Math.random() * (65 - 0)), n2: 65, c: "#448B3C" },
  { name: "Pharah", n1: Math.floor(Math.random() * (65 - 0)), n2: 82, c: "#3C7DC9"} ,
  { name: "Reaper", n1: Math.floor(Math.random() * (65 - 0)), n2: 83, c: "#7F3D51" },
  { name: "Reinhardt", n1: Math.floor(Math.random() * (65 - 0)), n2: 82, c: "#5A1A7" },
  { name: "Roadhog", n1: Math.floor(Math.random() * (65 - 0)), n2: 81, c: "#C39354" },
  { name: "Soldier: 76", n1: Math.floor(Math.random() * (65 - 0)), n2: 81, c: "#6A7995" },
  { name: "Sombra", n1: Math.floor(Math.random() * (65 - 0)), n2: 76, c: "#765CBA" },
  { name: "Symmetra", n1: Math.floor(Math.random() * (65 - 0)), n2: 81, c: "#8FBDCF" },
  { name: "Torbjörn", n1: Math.floor(Math.random() * (65 - 0)), n2: 82, c: "#C0746D" },
  { name: "Tracer", n1: Math.floor(Math.random() * (65 - 0)), n2: 84, c: "#D89440" },
  { name: "Widowmaker", n1: Math.floor(Math.random() * (65 - 0)), n2: 80, c: "#9F6BA9" },
  { name: "Winston", n1: Math.floor(Math.random() * (65 - 0)), n2: 80, c: "#A4A9BF" },
  { name: "Zarya", n1: Math.floor(Math.random() * (65 - 0)), n2: 81, c: "#EB84BA" },
  { name: "Zenyatta", n1: Math.floor(Math.random() * (65 - 0)), n2: 80, c: "#EFE884" }
];

$(document).ready(function() {

  data.forEach(function(e) {
    $(".row")
      .append(
      '<div class="frame"><div class="new"><span class="new-text">new!</span></div><div class="frame-avatar"><div class="avatar" style=" background-image: url(https://blzgdapipro-a.akamaihd.net/hero/' +
      e.name.toLowerCase().replace(".", "").replace("ú", "u").replace(": ","-").replace('ö','o') +
      '/hero-select-portrait.png);"></div></div><div class="name"><h4>' +
      e.name +
      '</h4></div><div class="counts-frame"><div class="c-mask" style="background: linear-gradient(90deg, ' +
      e.c +
      " " +
      Math.round(e.n1 / e.n2 * 100, 2) +
      "%, #CAD2E0 " +
      Math.round(e.n1 / e.n2 * 100, 2) +
      '%);"><div class="skew-b"><span class="counts">' +
      e.n1 +
      "/" +
      e.n2 +
      "</span></div></div></div></div>"
    ); 
    $('.frame').fadeIn().css("display","inline-block");
  });
 

  $(".frame").on("click", function() {
    $(".frame").removeClass("shiny");
    $(".frame > .new").hide();
    $(this).addClass("shiny");
    $(this).find(".new").show();
  });

  $(".frame").on("mouseenter", function() {
    audio.volume = 0.08;
    audio.play();
  });

  $(".frame").on("mouseleave", function() {
    audio.pause();
    audio.currentTime = 0;
  });
  
  var audio = $("audio")[0];
  var main = $("audio")[1];

  main.volume = 0.04;
  main.play();
});