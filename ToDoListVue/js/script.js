Vue.component("todo-item", {
    data: function () {
        return {
            isModified: false,
            newText: this.item.text,
            isItemEmpty: false
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
            if (this.newText.trim().length === 0) {
                this.isItemEmpty = true;
                this.newText = this.item.text;
                return;
            }

            this.item.text = this.newText;
            this.isModified = false;
            this.isItemEmpty = false;
        }
    },
    template: "#todo-item-template"
});

new Vue({
    el: "#my-form",
    data: {
        items: [],
        newId: 1,
        newItemText: "",
        isInputFieldEmpty: false
    },
    methods: {
        addItem: function () {
            if (this.newItemText.trim().length === 0) {
                this.isInputFieldEmpty = true;
                return;
            }

            this.items.push({
                id: this.newId,
                text: this.newItemText,
            });

            this.newId++;
            this.newItemText = "";
            this.isInputFieldEmpty = false;
        },
        deleteItem: function (item) {
            this.items = this.items.filter(function (e) {
                return e !== item;
            });
        }
    }
});