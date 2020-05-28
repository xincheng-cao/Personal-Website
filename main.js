var coll = document.getElementsByClassName("collapsible");

coll[0].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = document.getElementsByClassName("pj1_collapsible")[0];
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    stopVideo(content);
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  var content2 = document.getElementsByClassName("pj2_collapsible")[0];
  if(content2.style.maxHeight){
    content2.style.maxHeight = null;
    coll[1].classList.toggle("active");
    stopVideo(content2);
  }
});

coll[1].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = document.getElementsByClassName("pj2_collapsible")[0];
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    stopVideo(content);
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  var content2 = document.getElementsByClassName("pj1_collapsible")[0];
  if(content2.style.maxHeight){
    content2.style.maxHeight = null;
    coll[0].classList.toggle("active");
    stopVideo(content2);
  }
});

var stopVideo = function ( element ) {
	var iframe = element.querySelectorAll( 'iframe');
	var video = element.querySelectorAll( 'video' );
  var i;
  for (i=0;i<iframe.length;i++){
  	if ( iframe[i] ) {
	  	var iframeSrc = iframe[i].src;
		  iframe[i].src = iframeSrc;
	  }
  }
  for (i=0;i<iframe.length;i++){
    if ( video[i] ) {
      video[i].pause();
    }
  }
};
