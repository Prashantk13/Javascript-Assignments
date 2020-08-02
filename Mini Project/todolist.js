const clear = document.getElementById('clear-list');
const list = document.getElementById('list');
const myform = document.querySelector('#todo');
function clearitem(){
    list.innerHTML = "";
}
const button = document.getElementById('btn');
// button.onclick = function(){
function additem(){
    let item = myform.value;
    let text = document.createTextNode(item);
    let listitem = document.createElement('li');
    listitem.appendChild(text);
    list.appendChild(listitem);
}
// myform.addEventListener('keyup',function(event){
//     if(event.keycode === 13){
//         event.preventDefault()
//         button.onclick;
//     }
// });
// button.addEventListener('keypress',function(event){
//     if(event.keycode == 10){
//         event.preventDefault();
//         button.onclick();
//     }
// });
myform.onkeypress = function(){additem()};