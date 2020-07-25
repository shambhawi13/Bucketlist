// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#done").on("click", function(event) {
      var id = $(this).data("id");
      //var newCompleted = $(this).data("newsleep");
  
      var newCompletedState = {
        completed: true
      };
  
      // Send the PUT request.
      $.ajax("/api/wishlist/" + id, {
        type: "PUT",
        data: newCompletedState
      }).then(
        function() {
          console.log("changed completed to", newCompletedState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newWishlist = {
        name: $("#name").val().trim(),
        desc: $("#desc").val().trim(),
        //$("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/wishlist", {
        type: "POST",
        data: newWishlist
      }).then(
        function() {
          console.log("created new wishlist");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  