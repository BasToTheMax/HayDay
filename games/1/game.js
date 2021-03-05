const title = document.getElementById('modal-title');
const content = document.getElementById('modal-content');
const footer = document.getElementById('modal-footer');
const close = document.getElementById('modal-close');


if (localStorage.getItem("zndVh91F4Z/ID") == null || localStorage.getItem("zndVh91F4Z/ID") == undefined || localStorage.getItem("zndVh91F4Z/ID") == '') {
    localStorage.setItem("zndVh91F4Z/ID", Math.floor(Math.random() * 100000));
} else {

    /*fetch('https://hayday-8a4d.restdb.io/rest/users/')
    .then(res => res.json())
    .then(json => console.log(json)); */
}

if (localStorage.getItem('boer') == '' || localStorage.getItem('boer') == null) {
  boerMenu();
}

function boerMenu() {
  document.getElementById('modal').style.display='block';
  close.style.display='none';
    
  title.innerHTML = 'Welkom!';
    content.innerHTML = '<h1>Welkom!</h1><h2>Wat is de naam van je boerderij?</h2><input id="input_naam" class="w3-input w3-border" placeholder="Naam van je boerderij"><hr><h2>Wat ben je?</h2><p id="boer_tekst">Kies:<br></p><button onlcick="kies_boer()" class="w3-button w3-purple w3-round-xlarge">Boer</button> <button onclick="kies_boerin()" class="w3-button w3-purple w3-round-xlarge">Boerin</button><hr><button onclick="createAccount()" class="w3-button w3-round-xlarge w3-green">Maak account!</button><br><br>';
}
function createAccount() {
    var naam = document.getElementById('input_naam');
    
    if (localStorage.getItem('boer') == '' || localStorage.getItem('boer') == null) {} else {
        localStorage.setItem('naam', naam.value);
        document.getElementById('modal').style.display='none';
    }
}

function kies_boer() {
    var tekst = document.getElementById('boer_tekst');
    
    tekst.innerHTML = 'Boer!';
    localStorage.setItem("boer", "boer")
}
function kies_boerin() {
    var tekst = document.getElementById('boer_tekst');
    
    tekst.innerHTML = 'Boerin!';
    localStorage.setItem("boer", "boerin")
}
