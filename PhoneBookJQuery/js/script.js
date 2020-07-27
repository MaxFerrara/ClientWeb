$(function () {
    var personName = $("#person_name");
    var personSurname = $("#person_surname");
    var personPhone = $("#person_phone");

    var addButton = $("#add_button");

    addButton.click(function () {
        var table = $("#subscribers_table > tbody");

        var nameValue = personName.val();
        var surnameValue = personSurname.val();
        var phoneValue = personPhone.val();

        var isValid = true;
        var isDuplicateNumber = false;
        var inputField = $(".input_field");

        $("#subscribers_table > tbody > tr").each(function () {
            var phoneTableDetail = $(this).find(".phone_value");

            if (phoneTableDetail.text() === phoneValue) {
                $("#duplicate_phone_modal_dialog").modal('show');

                isDuplicateNumber = true;
            }
        });

        inputField.each(function () {
            var currentInputElement = $(this);

            if (isTextFieldEmpty(currentInputElement.val())) {
                currentInputElement.addClass("is-invalid");

                isValid = false;
            }
        });

        if (isNotNumber(inputField.last().val())) {
            isValid = false;

            inputField.last().addClass("is-invalid");
        }

        if (!isValid || isDuplicateNumber) {
            return;
        } else {
            var newTableRow = $("<tr>");
            newTableRow.html("<th class='index_number' scope='row'></th>" +
                "<td class='name_value'></td>" +
                "<td class='surname_value'></td>" +
                "<td class='phone_value'></td>" +
                "<td><button type='button' class='btn del_button'><i class='fa fa-times' aria-hidden='true'></i></button></td>");

            newTableRow.find(".name_value").text(nameValue);
            newTableRow.find(".surname_value").text(surnameValue);
            newTableRow.find(".phone_value").text(phoneValue);

            table.append(newTableRow);

            enumerateTableRows();

            inputField.each(function () {
                $(this).val("").removeClass("is-invalid");
            });
        }

        $(".del_button").click(function () {
            var thisTableRow = this;
            var modalDialog = $("#delete_modal_dialog");

            modalDialog.modal('show');

            $(".modal_delete_button").click(function () {
                $(thisTableRow).closest('tr').remove();
                enumerateTableRows();

                modalDialog.modal('hide');
            });
        });

    });

    function enumerateTableRows() {
        $("#subscribers_table > tbody > tr").each(function (i) {
            var number = i + 1;

            $(this).find('.index_number').text(number);
        });
    }

    function isTextFieldEmpty(text) {
        return text === "";
    }

    function isNotNumber(text) {
        return isNaN(Number(text));
    }
});