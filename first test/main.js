var main_element = document.getElementById('heading');

var new_element = document.createElement ('h1');

new_element.innerHTML = "Hello World !";

new_element.setAttribute ("class", "first-heading");

new_element.style.backgroundColor = "slateblue"
new_element.style.color ="#bebebebe"
new_element.style.fontSize = "50px"

var attr = new_element.hasAttribute ("class") 

if (attr){
    console.log(attr)

}  else {
    alert("no attribute");
}


main_element.appendChild (new_element);