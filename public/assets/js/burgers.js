//data is jquery object specific for retrieving data attributes
//short for .attr(data-id)
$(function() {
    $(".change-devoured").on("click", function(event){
        event.preventDefault();        
        const id = $(this).data("id");
        console.log("const id js line 7" + id);
        const newDevoured = true;

        const newDevouredState = {
            devoured: newDevoured
        }
    //Send the PUT request 
    $.ajax("/api/burgers/"+id, {
        type: "PUT", 
        data: newDevouredState
    }).then(
        function(){
            console.log("changed to devoured");
            location.reload();
        }
    ); 
    });

    $(".delete").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
    console.log("delete" + id);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function () {
            console.log("delete id data");
            // Reload the page to get the updated list
            // location.reload();
          }
        );
        location.reload();
      });
});