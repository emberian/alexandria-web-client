//drawTable: a loop that will sequentially feed drawRow with the proper data
function drawTable(data) {
    //data=JSON.parse(data);
    for (var i = 0; i < data.data.length; i++) {
        console.log("row " + data.data[i]);
        drawRow(data.data[i]);
    }
}

//drawRow: retrieves data from drawTable, and constructs a visual row out of it
function drawRow(rowData) {
    var row = $("<tr />")
        $("#bookTable").append(row);
    row.append($("<td><img src=\"" + rowData.cover_image + "\"/></td>"));
    row.append($("<td>" + rowData.name + "</td>"));
    row.append($("<td>" + rowData.description + "</td>"));
    row.append($("<td>" + rowData.isbn + "</td>"));
    row.append($("<td>" + rowData.available + "</td>"));
    row.append($("<td>" + rowData.quantity + "</td>"));
    //row.append($("<td>" + rowData.active_date + "</td>"));
    row.append($("<td>" + rowData.permission + "</td>"));
}

//statusBar: plops a statusbar on the page when called
function statusBar(){
   <div class="navbar navbar-inverse" role="navigation">
     <div class="container">
       <div class="navbar-header">
         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
           <span class="sr-only">Toggle Nav</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </button>
         <a class="navbar-brand" href="#">Alexandria</a>
       </div>
       <div class="navbar-collapse collapse">
         <ul class="nav navbar-nav">
           <li class="Back"><a href="index.html">Back</a></li>
         </ul>
       </div><!--/.nav-collapse -->
     </div>
   </div>
}	

//this function runs upon submission of search
$( "#search-form" ).submit( function(){
    statusBar();
    //console.log("This is a console printing test!");
    $.get("/api/v1/book/search?q=" + $("#search-field").val())
    //$.get("/api/v1/search?q=" + $("#search-field").val())
    //$.get("/api/v1/book")
        .done(function(data){
            $("body").empty();
            $("body").append($("<table class=\"table table-striped table-bordered\" id=\"bookTable\"></table>"))
                drawTable(data);
        })

    .fail(function(data){
        alert("Connection to API Server Failed!");
    });
    //return false;
});

$( ".Back" ).click(function(){
	location.reload();
	
});
