var clickedElement;

// Add event listeners to all elements on the page
var elements = document.getElementsByTagName("*");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(event) {
        clickedElement = event.target;
        openDrawer();
    });
}

function openDrawer() {
    var drawer = document.getElementById("drawer");
    var title = document.getElementById("drawer-title");
    title.innerHTML = clickedElement.tagName;
    drawer.classList.remove("hidden");
}

var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var description = document.getElementById("drawer-description").value;
    postData("https://jsonplaceholder.typicode.com/todos/1", {tagName: clickedElement.tagName, description: description});
});

function postData(url = '', data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },})}
        
    
