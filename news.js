// create NEWS and add to NEWS CONTAINER


function createNews() {

    var newsContainer = document.querySelector('.news-txt');
    var infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');
    var infoImg = document.createElement('img');
    var infoTitle = document.createElement('h3');
    var infoTxt = document.createElement('p');
    infoContainer.setAttribute('class', 'info-cont');

    infoContainer.appendChild(infoImg);
    infoContainer.appendChild(infoTitle);
    infoContainer.appendChild(infoTxt);

}



function loadNews() {
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'news.json', true);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            var news = JSON.parse(this.responseText);


            
        }
    }
    
    xhr.send();
}

/*
var output = "";

if (output == "") {

    for (var i = 0; i <= 4; i++) {

    output = '<ul class="news-list">'

    '</ul>'
    }

}
*/