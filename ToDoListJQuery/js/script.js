$(function () {
    $("#add_item_button").click(addListItem);

    $("#main_form").on("submit", function (event) {
        event.preventDefault();
        addListItem();
    });

    function addListItem() {
        var toDoItemInput = $("#new_todo_item");
        var toDoList = $("#todo_list");

        var textItem = toDoItemInput.val();
        var newToDoItem = $("<li>");

        if (textItem === "") {
            alert("input field is empty");
        } else {
            switchToViewMode();
            toDoList.append(newToDoItem);
            toDoItemInput.val("");
        }

        function switchToViewMode() {
            newToDoItem.html("<div class='li_div'>" +
                "<div class='first_flex_child'><span class='item_text'></span></div>" +
                "<div><button class='edit_button' type='button'>edit</button>" +
                "<button class='delete_button' type='button'>delete</button></div>" +
                "</div>");

            newToDoItem.find(".item_text").text(textItem);

            newToDoItem.find(".delete_button").click(function () {
                newToDoItem.remove();
            });

            newToDoItem.find(".edit_button").click(function () {
                newToDoItem.html("<div class='edit_div'>" +
                    "<div><input class='new_text' type ='text'></div>" +
                    "<div><button class='save_button' type='button'>save</button>" +
                    "<button class='cancel_button' type='button'>cancel</button></div>" +
                    "</div>");

                var newTextSelector = newToDoItem.find(".new_text");

                newTextSelector.val(textItem);

                newToDoItem.find(".save_button").click(function () {
                    if (newTextSelector.val() === "") {
                        alert("input field is clear");
                        newTextSelector.val(textItem);
                    } else {
                        textItem = newTextSelector.val();
                        switchToViewMode();
                    }
                });

                newToDoItem.find(".cancel_button").click(function () {
                    switchToViewMode();
                });
            });
        }
    }
});