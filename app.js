var btnTranslate = document.querySelector("#btn-translate");
var textData = document.querySelector("#txt-input");
var outputData = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedURL(value) {
    return serverURL + "?text=" + value;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with the server, try again later.");
}

function btnClickHandler() {
    var textValue = textData.value;
    outputData.innerText = "Translation in progress..."
    fetch(getTranslatedURL(textValue))
    .then(response => response.json())
    .then(json => outputData.innerText = json.contents.translated)
    .catch(errorHandler);
}

btnTranslate.addEventListener("click",btnClickHandler);