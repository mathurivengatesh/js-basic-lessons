import { myFunction,move } from './form.js';

export var store = [];
  
  function reset() {
    var table, tr;
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");
    for (var i = 1; i < tr.length; i++) {
      tr[i].style.display = "none";
    }
  }

 var search = document.getElementById('find');
 search.addEventListener('keyup',() => {
    reset();
 });
 var click = document.getElementById('add');
 click.addEventListener('click',() => {
    move();
    console.log("hai");
 });
 var find = document.getElementById('search');
 find.addEventListener('click',() => {
    myFunction();
 });