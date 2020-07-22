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

        //if()

        var newTableRow = $("<tr>");
        newTableRow.html("<th class='index_number' scope='row'></th><td class='name_value'></td><td class='surname_value'></td><td class='phone_value'></td><td><button class='btn del_button'><i class='fa fa-times' aria-hidden='true'></i></button></td>");

        newTableRow.find(".name_value").text(nameValue);
        newTableRow.find(".surname_value").text(surnameValue);
        newTableRow.find(".phone_value").text(phoneValue);

        table.append(newTableRow);

        enumerateTableRows();

        personName.val("");
        personSurname.val("");
        personPhone.val("");

        $(".del_button").click(function () {
            $(this).closest('tr').remove();

            enumerateTableRows();
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
});