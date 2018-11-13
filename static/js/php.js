var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("lol");

var x = document.createElement("PRE");
var t = document.createTextNode(c);
x.appendChild(t);
document.body.appendChild(x);