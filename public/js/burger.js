// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-status").on("click", function (event) {

        var id = $(this).data("id");
        var newStatus = $(this).data("newStatus");
        console.log(event)
        var newStatusState = {
            devoured: newStatus
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStatusState
        }).then(
            function () {
                console.log("changed hungry to", newStatus);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bg").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });




    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted cat", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
