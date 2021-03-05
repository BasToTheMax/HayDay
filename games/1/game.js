const title = document.getElementById('modal-title');
const content = document.getElementById('modal-content');
const footer = document.getElementById('modal-footer');
const close = document.getElementById('modal-close');


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
  close.style.display='none';
    
  title.innerHTML = 'Welkom!';
    content = '<h1>Welkom!</h1><h2>Wat is de naam van je boerderij?</h2><input id="input_naam" placeholder="Naam van je boerderij"><hr><h2>Wat ben je?</h2><p id="boer_tekst">Kies:<br></p><button id="button_boer" class="w3-button w3-purple w3-round-xlarge">Boer</button><hr>';
}
