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

          newH3 = $('<h3/>', {
            text: this.title
          });

          newImg = $('<img/>', {
            src: this.badge
          });

          newAnch = $('<a/>', {
            class: 'btn btn-primary',
            href: this.url,
            target: '_blank',
            text: 'See Course'
          });

          newDiv.append(newH3);
          newDiv.append(newImg);
          newDiv.append(newAnch);

          targetDiv.append(newDiv);
        })
      }
      else { 
        console.log("failed to obtain badges!") ; 
        targetDiv.html("<p>failed to obtain badges!</p>") ;
      }
    },
  })
  

});
