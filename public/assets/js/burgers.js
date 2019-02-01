

// $(function(){
    $(function renderHTML(){
        const rawTemplate = document.getElementById("burger-list").innerHTML;
        const compiledTemplate = Handlebars.compile(rawTemplate);
        const generatedHTML = compiledTemplate(burgers);

        const burgerContainer = document.getElementById("burgers-container");
        burgerContainer.innerHTML = generatedHTML;
});

// $(".change-devoured").on("click", function(event){
//         const id = $(this).data("id");
//         const newDevoured = $(this).data("newdevoured");

//         const newDevouredState = {
//             devoured: newDevoured
//         }

//     //Send the PUT request 
//     $.ajax("/api/burgers/"+id, {
//         type: "PUT", 
//         data: newDevouredState
//     }).then(
//         function(){
//             console.log("changed to devoured");
//             location.reload();
//         }
//     ); 
//     });
// });