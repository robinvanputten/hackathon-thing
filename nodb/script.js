function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function addNames() {
	var puzzle_name = document.getElementById('puzzle').value;
	var name = document.getElementById('names').value;

	name = name.split(',');

	document.getElementById('puzzle_table').innerHTML = "<tr><th>Name</th><th>Puzzle<th></tr>";

	for (var i = 0; i < name.length; i++) {
		document.getElementById('puzzle_table').innerHTML += "<tr><td>" + name[i] + "</td><td>" + puzzle_name + "</td><td><button class='btn btn-danger' id='" + name + "'>stop</button></td><tr>"
	}
	$("#myModal").modal("hide");
}
