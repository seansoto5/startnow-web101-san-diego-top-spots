$(document).ready(function() {
    $.getJSON("data.json", function(json) {
        for (var i=0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].name + "</td>");
            tr.append("<td>" + json[i].description + "</td>");
            tr.append("<td>" + '<a class="button is-success" target="_blank" href="https://www.google.com/maps?q=' + json[i].location + '">Open in Google Maps</a>' + "</td>");
            $('table').append(tr); 
        }
    })
});
