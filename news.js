// create NEWS and add to NEWS CONTAINER

var newsContainer = document.querySelector('.news-txt');

// wiev MORE span element

var showMore = " <span class=\"trun-par\">rozwiń</span>";

var span = " <span class=\"trun-txt\"></span>";

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

            var infoPar = document.querySelectorAll(".info-paragraph");

            truncate(infoPar, 150);
            
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

    if (txtcont.length <= 150) {

        infoTxt.innerHTML = txtcont;

    } else {

        var spanDisp = document.createElement('span');
        var spanHidden = document.createElement('span');
        var moreTxt = document.createElement('span');

        spanDisp.setAttribute('class', 'span-disp');
        spanHidden.setAttribute('class', 'span-hidden');
        moreTxt.setAttribute('class', 'disp-button');

        spanDisp.innerHTML = textcont.substring(0, 140);
        spanHidden.innerHTML = textcont.substring(140, textcont.length);

        infoTxt.appendChild(spanDisp);


        // sipdFunc() - to show/hidde made elements
        // https://stackoverflow.com/questions/36798005/append-multiple-items-in-javascript

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

window.addEventListener("load", loadNews(0, 2));



// CONDITION of TRUNCATE PARAGRAPHS of NEWS SECTION







// TRUNCATE PARAGRAPHS of NEWS SECTION

function truncate(arr, len) {    

    for (var i = 0; i < arr.length; i++) {
      
      if (arr[i].innerHTML.length > len) {
        
        arr[i].innerHTML = truncatePar(arr[i].innerHTML, len);
        
      }
      
    }

  return arr;
  
}

function truncatePar(str, len) {

    span.innerHTML = str.substring(len - 10, str.length);

    

    str = str.substring(0, len - 10) + "... " + span + showMore;

    

    return str;

}


/*
function truncatePar(str, len) {

    if (str.length > len) {

        showMore.innerHTML = "rozwiń";
       
        str = str.substring(0, len - 10) + "..." + showMore;

    } else {

        showMore.innerHTML = "zwiń";

        str = str + showMore;

    }

    return str;

}
*/

showMore.addEventListener("click", function listenTOme() {

    if (this.previousSibling.style.display == "none") {
        this.previousSibling.style.display = "block";
    } else {
        this.previousSibling.style.display = "none";
    }

});







