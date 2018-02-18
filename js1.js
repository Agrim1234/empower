//var a=[1,2,3,4];
//for (var i = 5; i < 9; i++) {
//    a[a.length]=i;}
//document.getElementById("p1").innerHTML =a;

$(document).ready(function(){
    $("div.container").click(function(){
        $("div.sidenav").fadeToggle();
    });

    $(".Backbtn").click(function(){
      window.history.back()
    });

    /*$(".history").toggle(
    function() {  $(".london1").css("opacity","0"); },
    function() {  $(".london1").css("opacity","1"); }
    );

    $(".people").toggle(function() {
      $("p").css("opacity","0");
    }, function() {
      $(".london2").css("opacity","1");
    });

    $(".economy").toggle(function() {
      $(".london3").css("opacity","0");
    }, function() {
      $(".london3").css("opacity","1");
    });*/
    function handler1() {
    $(".london1").css({"opacity":"0","transition":"0.7s"});
    $(".history").css({"width": "870px", "transition": "0.7s"});
    $(".history").one("click", handler2);
    }
    function handler2() {
    $(".london1").css({"opacity":"1","transition":"0.7s"});
    $(".history").css({"width": "320px", "transition": "0.7s"});
    $(".history").one("click", handler1);
    }
    function handler3() {
    $(".london3").css("opacity", "0");
    $(".economy").css({"width":"870px","margin-left":"400px"});
    $(".economy").one("click", handler4);
    }
    function handler4() {
    $(".london3").css("opacity", "1");
    $(".economy").css({"margin-left":"950px","width":"320px"});
    $(".economy").one("click", handler3);
    }
    function handler5() {
    $(".london2").css({"opacity":"0","transition":"0.7s"});
    $(".people").css({"width": "870px", "transition": "0.7s"});
    $(".people").one("click", handler6);
    }
    function handler6() {
    $(".london2").css({"opacity":"1","transition":"0.7s"});
    $(".people").css({"width": "320px", "transition": "0.7s"});
    $(".people").one("click", handler5);
    }
    $(".history").one("click", handler1);
    $(".economy").one("click", handler3);
    $(".people").one("click", handler5);

    $("#signup").click(function(){
      window.location.href = "signup.html"
    });
    $("#signin").click(function(){
      window.location.href = "signin.html"
    });
  });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if(panel.style.display==="block"){
      panel.style.display="none";
    }else {
      panel.style.display="block";
    }
  });
}

//var cancelbtn = document.getElementsByClassName("cancelbtn")
//cancelbtn.addEventListener("click", function(){
//window.location.href = "first.html";
//});

//var but1 = document.getElementsByClassName("container");
//but1.addEventListener("click", function(){
//this.classList.toggle("change");
//var nav=document.getElementsByClassName("sidenav");
//nav.style.display="block";
//});

function myFunction(x) {
    x.classList.toggle("change");
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTab(evt, cityName){
    switch (cityName) {
      case 'About':
                    document.getElementById("aboutThe").innerHTML="About London";
                    document.getElementById("about").innerHTML="London is the capital and most populous city"+
                    "of England and the United Kingdom. Standing on the River Thames in the south east of the island of Great Britain,"+
                    "London has been a major settlement for two millennia. It was founded by the Romans, who named it Londinium. London's"+
                    "ancient core, the City of London, largely retains its 1.12-square-mile (2.9 km2) medieval boundaries. Since at least the"+
                    "19th century, London has also referred to the metropolis around this core, historically split between Middlesex, Essex,"+
                    "Surrey, Kent and Hertfordshire, which today largely makes up Greater London, a region "+
                    "governed by the Mayor of London and the London Assembly.";
                    document.getElementById("Culture").style.color = "#818181";
                    document.getElementById("Life").style.color = "#818181";
                    document.getElementById("Important").style.color = "#818181";
                    document.getElementById("About").style.color = "white";
                    break;
      case 'Culture':
                    document.getElementById("aboutThe").innerHTML="Cultural Aspect";
                    document.getElementById("about").innerHTML="The culture of London concerns the engineering, music, museums, festivals and "+
                    "other entertainment in London, the capital city of the United Kingdom. London is widely believed to be the culture capital "+
                    "of the world, although this title is disputed with a number of other cities internationally. The city is particularly "+
                    "renowned for its theatre quarter, and its West End theatre district has given the name to West End theatre, the strand of"+
                    "mainstream professional theatre staged in the large theatres in London. London is also home to notable cultural attractions "+
                    "such as the British Museum, the Tate Galleries, the National Gallery, the Notting Hill Carnival and The O2.";
                    document.getElementById("Culture").style.color = "white";
                    document.getElementById("Life").style.color = "#818181";
                    document.getElementById("Important").style.color = "#818181";
                    document.getElementById("About").style.color = "#818181";
                    break;
      case 'Life':
                    document.getElementById("aboutThe").innerHTML="Life in London";
                    document.getElementById("about").innerHTML="One of the things that makes life in London so unique is the fact that everywhere"+
                    "you look the brand new is brushing shoulders with serious history. It certainly makes for a fascinating walk to work or"+
                    "college, and no matter how long you live in the city there is always another must-see site to visit. ";
                    document.getElementById("Life").style.color = "white";
                    document.getElementById("Culture").style.color = "#818181";
                    document.getElementById("Important").style.color = "#818181";
                    document.getElementById("About").style.color = "#818181";
                    break;
      case 'Important':
                    document.getElementById("aboutThe").innerHTML="Important Places";
                    document.getElementById("about").innerHTML="Warner Bros. Studio Tour, Coca-Cola London Eye, Hop on Hop off Bus Tour, Madame "+
                    "Tussauds London, The View from The Shard,  ";
                    document.getElementById("Important").style.color = "white";
                    document.getElementById("Life").style.color = "#818181";
                    document.getElementById("Culture").style.color = "#818181";
                    document.getElementById("About").style.color = "#818181";
                    break;
}

}
