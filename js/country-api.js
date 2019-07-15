var mainSection= document.getElementById('translationcenter');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        function setTranslation () {
          var translationParagraph = document.createElement('p');
          mainSection.appendChild(translationParagraph);
          var randomMessageText = document.createTextNode(apiResult.translations.br);
          translationParagraph.appendChild(randomMessageText);
        };
        setTranslation();
    }
};
xmlhttp.open('GET', 'https://restcountries.eu/rest/v2/alpha/us', true);
xmlhttp.send();
