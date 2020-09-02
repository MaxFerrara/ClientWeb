Vue.component("book-item", {
    data: function () {

    },
    props: {

    },
    methods: {

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
            var contactFieldsArray = [];

            contactFieldsArray.push(this.personName);
            contactFieldsArray.push(this.personSurname);
            contactFieldsArray.push(this.personPhone);


        },
        deleteContact: function () {

        }
    }
});