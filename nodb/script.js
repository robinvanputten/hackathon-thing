function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
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

    for (var i = 0; i < name.length; i++) {
        document.getElementById('naam_table').innerHTML += "<div>" + name[i] + "</div>";
        document.getElementById('puzzle_table').innerHTML += "<div>" + puzzle_name + "</div>";
    }
    $("#myModal").modal("hide");
}
