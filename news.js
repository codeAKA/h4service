// create NEWS and add to NEWS CONTAINER

var newsContainer = document.querySelector('.news-txt');

function createNews(pict, title, txtcont) {

    var infoContainer = document.createElement('div');
    var textContainer = document.createElement('div');
    var infoImg = document.createElement('img');
    var infoTitle = document.createElement('p');
    var infoTxt = document.createElement('p');
    
    infoImg.src = pict;
    infoTitle.innerHTML = title;
    infoTxt.innerHTML = txtcont;
    infoTitle.style.fontWeight = "bold";

    infoContainer.setAttribute('class', 'info-cont');
    textContainer.setAttribute('class', 'txt-info-cont');

    textContainer.appendChild(infoTitle);
    textContainer.appendChild(infoTxt);

    infoContainer.appendChild(infoImg);
    infoContainer.appendChild(textContainer);

    newsContainer.appendChild(infoContainer);

}



function loadNews(from, to) {
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'news.json', true);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            var news = JSON.parse(this.responseText);

            for (var i = from; i <= to; i++) {

                createNews(news[i].picture, news[i].title, news[i].content);

            }
            
        }
    }
    
    xhr.send();
}

window.addEventListener("load", loadNews(0, 2));