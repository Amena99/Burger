//data is jquery object specific for retrieving data attributes
//short for .attr(data-id)
$(function() {
    $(".change-devoured").on("click", function(event){
           
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
            function (){
                console.log("changed to devoured");
                
            } 
        ); 
     location.reload();  
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
            location.reload();
          }
        );
        
         
        
      });

    $(".submit-burger").on("click", function (event) {
        event.preventDefault();
        let devouredState = 0;
       
        if($("[name=devoured]:checked").val() && $("[name=devoured]:checked").val().trim() === '1' ){
            devouredState = 1;
        }
        
        var newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: devouredState
        };
        console.log("before ajax col obj newBurger= ");
        console.log(newBurger);

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
            
        }).then(
            function(){
                console.log("created new burger-login in js");
                location.reload();
            }
        );
    }); 

    // $("#updateburger").on("submit", function(event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();
    
    //     // Get the ID by finding an element with a "name" attribute equal to the string "id"
    //     var id = $("[name=id]").val().trim();
    
    //     var updatedBurger = {
    //       burger_name: $("#updateburger [name=burger]").val().trim()
    //     };
    
    //     // Send the PUT request.
    //     $.ajax("/burgers/update/" + id, {
    //       type: "PUT",
    //       //'data' in the object is required and it is sending plan to 
    //       //the api mysql path. 
    //       data: updatedBurger
    //     }).then(
    //       function() {
    //         console.log("updated id ", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //       }
    //     );
    //   });
});