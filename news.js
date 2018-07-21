// create NEWS and add to NEWS CONTAINER

var newsContainer = document.querySelector('.news-txt');

// LOAD content NEWS SECTION

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

// CREATE content NEWS SECTION

function createNews(pict, title, txtcont) {

    var infoContainer = document.createElement('div');
    var textContainer = document.createElement('div');
    var clearClass = document.createElement('div');
    var infoImg = document.createElement('img');
    var infoTitle = document.createElement('p');
    var infoTxt = document.createElement('p');

    infoImg.src = pict;
    infoTitle.innerHTML = title;
    infoTxt.innerHTML = txtcont;
    infoTitle.style.fontWeight = "bold";

    infoContainer.setAttribute('class', 'info-cont');
    textContainer.setAttribute('class', 'txt-info-cont');
    clearClass.setAttribute('class', 'clear');
    infoTxt.setAttribute('class', 'info-paragraph');

    textContainer.appendChild(infoTitle);
    textContainer.appendChild(infoTxt);

    infoContainer.appendChild(infoImg);
    infoContainer.appendChild(textContainer);
    infoContainer.appendChild(clearClass);

    newsContainer.appendChild(infoContainer);

}

window.addEventListener("load", loadNews(0, 2));



// CONDITION of TRUNCATE PARAGRAPHS of NEWS SECTION







// TRUNCATE PARAGRAPHS of NEWS SECTION

function truncate(arr) {    

    for (var i = 0; i < arr.length; i++) {
      
      if (arr[i].length > 150) {
        
        arr[i] = truncatePar(arr[i], 150); // arr[i].textNode / textContent ???
        
      }
      
    }

  return arr;
}


function truncatePar(str, len) {

    var innerTrun = "";
    var trun = "<a class=\"trun-par\">" + innerTrun + "</a>";

    if (str.length > len) {
        innerTrun += "rozwiń";
        str = str.substring(0, len - 10) + "..." + trun;
    } else {
        innerTrun += "zwiń";
        str = str + trun;
    }

    return str;

}

var infoPar = document.querySelectorAll(".info-paragraph");

window.addEventListener("load", truncate(infoPar));

console.log(truncate(infoPar))



