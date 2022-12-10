
function loadKanye() {
    fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(data => displayKanye(data))
}

function displayKanye(ali) {
    console.log(ali);
    const quoteDiv = document.getElementById('quote');
    quoteDiv.innerText = ali.quote;

}