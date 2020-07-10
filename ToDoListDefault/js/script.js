"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var addToDoItemButton = document.getElementById("add_item_button");
    var toDoItemInput = document.getElementById("new_todo_item");
    var toDoList = document.getElementById("todo_list");

    addToDoItemButton.addEventListener("click", function () {
        var textItem = toDoItemInput.value;
        var newToDoItem = document.createElement("li");

        if (textItem === "") {
            alert("input field is clear");
        } else {
            switchToViewMode();
            toDoList.appendChild(newToDoItem);
            toDoItemInput.value = "";
        }

        function switchToViewMode() {
            newToDoItem.innerHTML = "<span class ='item_text'></span><button class ='edit_button' type ='button'>edit</button><button class ='delete_button' type ='button'>delete</button>";
            newToDoItem.querySelector(".item_text").textContent = textItem;

            newToDoItem.querySelector(".delete_button").addEventListener("click", function () {
                newToDoItem.parentNode.removeChild(newToDoItem);
            });

            newToDoItem.querySelector(".edit_button").addEventListener("click", function () {
                newToDoItem.innerHTML = "<input class ='new_text' type ='text'><button class ='save_button' type ='button'>save</button><button class ='cancel_button' type ='button'>cancel</button>";
                newToDoItem.querySelector(".new_text").value = textItem;

                newToDoItem.querySelector(".save_button").addEventListener("click", function () {
                    if (newToDoItem.querySelector(".new_text").value === "") {
                        alert("input field is clear");
                        newToDoItem.querySelector(".new_text").value = textItem;
                    } else {
                        textItem = newToDoItem.querySelector(".new_text").value;
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