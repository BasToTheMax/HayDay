if (localStorage.getItem("guild") == null) {
			var guild;
			
			$.get("https://www.uuidgenerator.net/api/guid", function(data, status){
    // alert("Data: " + data + "\nStatus: " + status);
guild = data;
});
				localStorage.setItem("guild", guild);
}
console.log("game " + localStorage.getItem("guild"));

$(document).ready(function(){
    $.ajax({
         url: "https://hayday-8a4d.restdb.io/rest/users.json",
         data: {},
         cors: "no-cors",
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('x-apikey', '5fd8fd21ff9d6706381405fa');
          xhr.setRequestHeader('Access-Control-Allow-Origin', 'No-CORS');},
         success: function(data) { alert('Success!' + data); }
      });
});
