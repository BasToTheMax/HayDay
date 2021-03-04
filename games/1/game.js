const title = document.getElementById('modal-title');
const content = document.getElementById('modal-content');
const footer = document.getElementById('modal-footer');

if (localStorage.getItem("zndVh91F4Z/ID") == null || localStorage.getItem("zndVh91F4Z/ID") == undefined || localStorage.getItem("zndVh91F4Z/ID") == '') {
    localStorage.setItem("zndVh91F4Z/ID", Math.floor(Math.random() * 100000));
} else {
    $(document).ready(function(){
        /* $.get("http://volatile.wtf/?key=zndVh91F4Z/hayday/level/", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        }); */
    });

    fetch('https://hayday-8a4d.restdb.io/rest/users/')
    .then(res => res.json())
    .then(json => console.log(json));
}

if (localStorage.getItem('boer') == '' || localStorage.getItem('boer') == null) {
  boerMenu();
}

function boerMenu() {
  document.getElementById('modal').style.display='block'
}
