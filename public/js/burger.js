// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-status").on("click", function (event) {
        console.log("worked")
        var id = $(this).data("id");
        var newStatus = $(this).data("newStatus");

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
        console.log("worked")
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bg").val().trim(),
            // devoured: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New Burger Added!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // $(".delete-cat").on("click", function (event) {
    //     var id = $(this).data("id");

    //     // Send the DELETE request.
    //     $.ajax("/api/cats/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function () {
    //             console.log("deleted cat", id);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });
});
