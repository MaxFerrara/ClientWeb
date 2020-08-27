Vue.component("todo-item", {
    data: function() {
        return {
            isModified: false,
            newText: this.item.text
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteItem: function () {
            this.$emit("delete-item", this.item);
        },
        editItem: function () {
            this.isModified = true;
        },
        cancelItem: function () {
            return this.isModified = false;
        },
        saveItem: function () {
            if(this.newText.trim().length === 0) {
                alert("input is empty");
                this.newText = this.item.text;
                return;
            }

            this.item.text = this.newText;
            this.isModified = false;
        }
    },
    template: "#todo-item-template"
});

Vue.component("todo-list", {
    data: function () {
        return {
            items: [],
            newId: 1,
            newItemText: ""
        }
    },
    methods: {
        addItem: function () {
            if (this.newItemText.trim().length === 0) {
                alert("input is empty");
                return;
            }

            this.items.push({
                id: this.newId,
                text: this.newItemText
            });

            this.newId++;
            this.newItemText = "";
        },
        deleteItem: function (item) {
            this.items = this.items.filter(function (e) {
                return e !== item;
            });
        }
    },
    template: "#todo-list-template"
});

new Vue({
    el: "#my-form"
});