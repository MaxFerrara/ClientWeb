"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var addToDoItemButton = document.getElementById("add_item_button") || document.getEle;
    var toDoItemInput = document.getElementById("new_todo_item");
    var toDoList = document.getElementById("todo_list");

    addToDoItemButton.addEventListener("click", function () {
        var textItem = toDoItemInput.value;
        var newToDoItem = document.createElement("li");

        if (textItem === "") {
            alert("input field is empty");
        } else {
            switchToViewMode();
            toDoList.appendChild(newToDoItem);
            toDoItemInput.value = "";
        }

      /*  addEventListener("keydown", function (event) {
             if(event.keyCode === 13) {
                 if (textItem === "") {
                     alert("input field is empty");
                 } else {
                     switchToViewMode();
                     toDoList.appendChild(newToDoItem);
                     toDoItemInput.value = "";
                 }
            }
        }) */

        function switchToViewMode() {
            newToDoItem.innerHTML = "<div class='li_div'>" +
                "<div class='first_flex_child'><span class='item_text'></span></div>" +
                "<div><button class='edit_button' type='button'>edit</button>" +
                "<button class='delete_button' type='button'>delete</button></div>" +
                "</div>";
            newToDoItem.querySelector(".item_text").textContent = textItem;

            newToDoItem.querySelector(".delete_button").addEventListener("click", function () {
                newToDoItem.parentNode.removeChild(newToDoItem);
            });

            newToDoItem.querySelector(".edit_button").addEventListener("click", function () {
                newToDoItem.innerHTML = "<div class='edit_div'>" +
                    "<div><input class='new_text' type ='text'></div>" +
                    "<div><button class='save_button' type='button'>save</button>" +
                    "<button class='cancel_button' type='button'>cancel</button></div>" +
                    "</div>";

                var newTextSelector = newToDoItem.querySelector(".new_text");

                newTextSelector.value = textItem;

                newToDoItem.querySelector(".save_button").addEventListener("click", function () {
                    if (newTextSelector.value === "") {
                        alert("input field is clear");
                        newTextSelector.value = textItem;
                    } else {
                        textItem = newTextSelector.value;
                        switchToViewMode();
                    }
                });

                newToDoItem.querySelector(".cancel_button").addEventListener("click", function () {
                    switchToViewMode();
                });
            });
        }
    });
});