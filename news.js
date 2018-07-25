// --- create NEWS and add to NEWS CONTAINER ---

var newsContainer = document.querySelector('.news-txt');
var moreNews = document.querySelector('.more-news');


// LOAD content of NEWS SECTION

function loadNews(from, to) {
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'news.json', true);

    xhr.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            
            var news = JSON.parse(this.responseText);

            for (var i = from; i <= to; i++) {

                createNews(news[i].picture, news[i].title, news[i].content);

            }
            
            // - function to check length of load and Count of loaded news - ???

        }
    }
    
    xhr.send();

}

// CREATE content of NEWS SECTION

function createNews(pict, title, txtcont) {

    var infoContainer = document.createElement('div');
    var textContainer = document.createElement('div');
    var clearClass = document.createElement('div');
    var infoImg = document.createElement('img');
    var infoTitle = document.createElement('p');
    var infoTxt = document.createElement('p');

    // if appear condition of TOO LONG TEXT, HIDDE part of it

    if (txtcont.length <= 150) {

        infoTxt.innerHTML = txtcont;

    } else {

        var cutInd = txtcont.indexOf(" ", 140);

        var spanDisp = document.createElement('span');
        var spanHidden = document.createElement('span');
        var moreTxt = document.createElement('span');

        spanDisp.setAttribute('class', 'span-disp');
        spanHidden.setAttribute('class', 'span-hidden');
        moreTxt.setAttribute('class', 'disp-button');

        spanDisp.innerHTML = txtcont.substring(0, cutInd);
        spanHidden.innerHTML = txtcont.substring(cutInd, txtcont.length);
        moreTxt.innerHTML = "... rozwiń";

        spanHidden.style.display = "none";
        moreTxt.style.color = "#006AA3";

        moreTxt.addEventListener("click", function () {
            if (this.previousSibling.style.display == "inline") {
                this.previousSibling.style.display = "none";
                this.innerHTML = "... rozwiń";
                
            } else {
                this.previousSibling.style.display = "inline";
                this.innerHTML = " zwiń";
            }
        });

        infoTxt.appendChild(spanDisp);
        infoTxt.appendChild(spanHidden);
        infoTxt.appendChild(moreTxt);

    }


    infoContainer.setAttribute('class', 'info-cont');
    textContainer.setAttribute('class', 'txt-info-cont');
    clearClass.setAttribute('class', 'clear');
    infoTxt.setAttribute('class', 'info-paragraph');

    infoImg.src = pict;
    infoTitle.innerHTML = title;
    infoTitle.style.fontWeight = "bold";

    textContainer.appendChild(infoTitle);
    textContainer.appendChild(infoTxt);

    infoContainer.appendChild(infoImg);
    infoContainer.appendChild(textContainer);
    infoContainer.appendChild(clearClass);

    newsContainer.appendChild(infoContainer);

}

window.addEventListener('load', loadNews(0, 2));

// ----- load NEWS using BUTTON -----

moreNews.addEventListener('click', function loadOFnews() {

    loadNews(3, 5);

});