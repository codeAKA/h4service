
// addition event to buttons
var retBtn = document.querySelector(".back");

(function takeBtns (){
  
  var btns = document.querySelectorAll(".menu-item");
  
  
  for (var i = 0; i < btns.length; i ++) {
  
    btns[i].addEventListener("click", takeEl);
  
  }
  
  retBtn.addEventListener("click", scrollUp);
})();

// assigning Target To Buttons, and Invoke Function Scroll To Target - scrollTo
  
function takeEl (element) {
  
  var cont = document.querySelectorAll(".cont");
  
  for (var i = 0; i < cont.length; i++) {
    
    if (this.classList.contains(cont[i].id)) {
    
      element = cont[i];
      
      scrollTo(element);
      
    }
  } 
}


// animate Scroll To Target

var scrollTo = function(el) {

  var destination = el.offsetTop;
  var docSize = document.body.scrollHeight - window.innerHeight;
  var marginY = window.pageYOffset;
  var scroller = null;
  var speed = 0;

  if (document.body.clientHeight > document.body.clientWidth) {
    speed = 20;
  } else {
    speed = 15;
  }
  
  scroller = setTimeout(function(){
    scrollTo(el);
  }, 1);
  
  marginY = marginY + speed;
  
  if(marginY >= destination || marginY > docSize) {
    clearTimeout(scroller);
  }
  
  window.scroll(0, marginY);
  
}

// working of Return Button

function scrollUp() {

  var marginY = window.pageYOffset;
  var scroller = null;
  var speed = 0;

  if (document.body.clientHeight > document.body.clientWidth) {
    speed = 20;
  } else {
    speed = 15;
  }
  
  scroller = setTimeout(function(){
    scrollUp();
  }, 1);
  
  marginY = marginY - speed;
  
  if(marginY <= 0) {
    clearTimeout(scroller);
  }
  
  window.scroll(0, marginY);
  
}


/*
// animate Scroll To Target

function scrollTo(el) {
  var marginY = window.pageYOffset;
  var destination = el.offsetTop;
  var scroller = null;
  var speed = 8;
  var docSize = document.body.scrollHeight - window.innerHeight;
  
  scroller = setTimeout(function(){
    scrollTo(el);
  }, 1);
  
  marginY = marginY + speed;
  
  if(marginY >= destination || marginY > docSize) {
    clearTimeout(scroller);
  }
  
  window.scroll(0, marginY);
  
}

// working of Return Button

function scrollUp() {
  
  var marginY = window.pageYOffset;
  var scroller = null;
  var speed = 8;
  
  scroller = setTimeout(function(){
    scrollUp();
  }, 1);
  
  marginY = marginY - speed;
  
  if(marginY <= 0) {
    clearTimeout(scroller);
  }
  
  window.scroll(0, marginY);
  
}
*/



window.onscroll = function btnDisp() {

  if (window.pageYOffset >= window.outerHeight/2) {
    retBtn.classList.add("dis");
  } else {
    retBtn.classList.remove("dis");
  }

}

// btnDisp();
