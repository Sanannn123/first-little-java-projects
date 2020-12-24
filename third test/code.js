var button = document.getElementById ('butt')
var arr = ["yellow", "blue", "red", "slateblue", "green", "pink", "brown", "grey", "#bdbdbdbdbd"];

function randomColor () {
    let random = Math.floor (Math.random()*arr.length);
    document.body.style.background = arr [random]
}
 