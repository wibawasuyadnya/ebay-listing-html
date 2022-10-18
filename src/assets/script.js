$(function() {
    var reviews = [];
    $.getJSON('src/assets/data-reviews.json', function(data) {
        $.each(data.reviews, function(i, f) {
           var tblRow = "<tr>" + "<td>" + f.description + "</td>" +
            "<td>" + f.title + "</td>" + "<td>" + f.product + "</td>" + "<td>" + f.date + "</td>" + "</tr>"
            $(tblRow).appendTo("#datareview tbody");
      });
 
    });
 
 });

