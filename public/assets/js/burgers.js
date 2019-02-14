
//data is jquery object specific for retrieving data attributes
//short for .attr(data-id)
$(function() {
    $(".change-devoured").on("click", function(event){
        const id = $(this).data("id");
        console.log("const id js line 7" + id);
        const newDevoured = $(this).data("newdevoured");
        
        const newDevouredState = {
            devoured: newDevoured
        }
        console.log(newDevouredState);
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
});