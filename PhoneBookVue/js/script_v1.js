new Vue({
    el: "#phone-book",
    data: {
        personName: "",
        personSurname:"",
        personPhone:"",
        contactId: 1,
        contacts: [],
        isContactValidate: false
    },
    methods: {
        addContact: function () {
            if (this.personName.trim().length === 0) {
                alert("input field is empty")
                return;
            }

            this.contacts.push({
                id: this.contactId,
                name: this.personName,
                surname: this.personSurname,
                phone: this.personPhone
            });

            this.contactId++;
            this.personName = "";
            this.personSurname = "";
            this.personPhone = "";
        },
        deleteContact: function (contact) {
            this.contacts = this.contacts.filter(function (e) {
                return e !== contact;
            });
        }
    }
});