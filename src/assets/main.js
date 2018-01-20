$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/4257681.json',
    dataType: 'jsonp',
    success: function(response) {
      // grab the correct html element to update
      var targetDiv = $( "#badges" ) ;
      var iCount = 0;
      // handle response
      if (response.courses.completed != null) {
        // For each results in the set
        $.each(response.courses.completed, function() {
          // this refers to the current record being parsed.
          ++iCount;
          newDiv = $('<div/>', {
            id: iCount,
            class: 'course'
          });
          newDiv.append("<h3>" + this.title +"</h3>")
                .append("<br />")
                .append("<img src='" + this.badge + "' />")
                .append("<br />")
                .append("<a class='btn btn-primary' href='" + this.url + "' target='_blank'>See Course</a>") ;

          targetDiv.append(newDiv);
          
          /*targetDiv.add( "div" ).addClass( "course" )
                                .add("h3").text(this.title)
                                .append("<img src='" + this.badge + "' />")
                                .append("<a href='" + this.url + "' target='_blank'>See Course</a>") ;
          */
          /*targetDiv.html("<div class='course'>" + 
                           "<h3>" + this.title + "</h3>" +
                           "<img src='" + this.badge + "' />" +
                           "<a href='" + this.url + "' target='_blank'>See Course</a>" +
                         "</div>");*/
        })
      }
      else { 
        console.log("failed to obtained badges!") ; 
        targetDiv.text("failed to obtained badges!") ;
      }
    },
  })
  

});
