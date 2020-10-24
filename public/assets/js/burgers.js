// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newBurgerState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("changed devour to", true);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        console.log("working");

        var newBurger = {
            name: $("#br").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new Burger");
                location.reload();
            }
        );
    });

});

// I dont know whats going wrong with my code but i need to figure out why its taking the submit button but not adding or deleting