
// add EVENT to BUTTON

var more = document.querySelectorAll(".read-more");

for (var i = 0; i < more.length; i ++) {

    more[i].addEventListener("click", contentAssign);

}

// assign CONTAINER to BUTTON

function contentAssign() {

var content = document.querySelectorAll(".cont-text");
var contain = document.querySelectorAll(".cont-ain");
var current;

    for (var j = 0; j < content.length; j ++) {

        content[j].innerHTML = "";
        contain[j].innerHTML = "";

        // load content

        if (this.classList[this.classList.length - 1] === content[j].classList[content[j].classList.length - 1] && this.classList[this.classList.length - 1] === contain[j].classList[contain[j].classList.length - 1]) {

            current = content[j].classList[content[j].classList.length - 1];

            console.log(current, content[j]);

            function loadAllCont() {

            loadContent(current, content[j]);

            loadContent(current, contain[j]);

            }
            loadAllCont();

        }
    
    }
}

// load TEXT to CONTAINERS

function loadContent(name, target) {
  
    var xhr = new XMLHttpRequest();
    xhr.open('GET',  name + ".txt", true);
    
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (target.innerHTML === "") {
                target.innerHTML = this.responseText;
            } else {
                target.innerHTML = "";
            }
        }
    }
    
    xhr.send();

}
