// create NEWS and add to NEWS CONTAINER

function createNews() {

    var newsContainer = document.querySelector('.news-txt');
    var infoContainer = document.createElement('div');
    infoContainer.setAttribute('class', 'info-cont');

}

function loadNews() {
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'news.json', true);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
                target.innerHTML = JSON.parse(this.responseText);
            
        }
    }
    
    xhr.send();
}