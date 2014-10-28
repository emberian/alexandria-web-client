function drawTable(data) {
	data=JSON.parse(data);
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#bookTable").append(row);
    row.append($("<td><img src=\"" + rowData.cover_image + "\"/></td>"));
    row.append($("<td>" + rowData.name + "</td>"));
    row.append($("<td>" + rowData.description + "</td>"));
    row.append($("<td>" + rowData.isbn + "</td>"));
    row.append($("<td>" + rowData.available + "</td>"));
    row.append($("<td>" + rowData.quantity + "</td>"));
    row.append($("<td>" + rowData.active_date + "</td>"));
    row.append($("<td>" + rowData.permission + "</td>"));
}

$( "#search-form" ).submit( function(){
 	console.log("This is a console printing test!");
 	$.get("/search?q=" + $("#search-field").val())
	.done(function(data){
		$("body").empty();
		$("body").append($("<table class=\"table table-striped table-bordered\" id=\"bookTable\"></table>"))
		drawTable(data);	
  	})

  	.fail(function(data){
		alert("Connection to API Server Failed!");
	});
	return false;
});
