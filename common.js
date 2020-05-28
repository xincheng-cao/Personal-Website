var imglist=document.getElementsByTagName("img");
for (i=0;i<imglist.length;i++){
  imglist[i].setAttribute('draggable', false);
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-63px";
  }
  prevScrollpos = currentScrollPos;
}

/*
var prevScrollpos2 = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos2 = window.pageYOffset;
  if (prevScrollpos2 < currentScrollPos2) {
    document.getElementById("navbar_bottom").style.bottom = "0";
  } else {
    document.getElementById("navbar_bottom").style.bottom = "-20px";
  }
  prevScrollpos2 = currentScrollPos2;
}
*/
