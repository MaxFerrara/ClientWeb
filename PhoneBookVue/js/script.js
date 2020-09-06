Vue.component("book-item", {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteContact: function () {
            this.$emit("delete-contact", this.item);
        }
    },
    template: "#contact-template"
});

new Vue({
    el: "#my-phone-book",
    data: {
        personName: "",
        personSurname:"",
        personPhone:"",
        contactId: 1,
        phoneNumbers: [],
        isContactValidate: false
    },
    methods: {
        addContact: function () {
            if (this.personName.trim().length === 0) {
                alert("input field is empty")
                return;
            }

            this.phoneNumbers.push({
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
        deleteContact: function (item) {
            this.phoneNumbers = this.phoneNumbers.filter(function (e) {
                return e !== item;
            });
        }
    }
});