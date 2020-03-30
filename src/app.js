import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            items: [
                {task:"Clean the dog", isCompleted:false},
                {task:"cook a bean", isCompleted:false},
                {task:"chop logs", isCompleted:false} 
            ],
            newItem: ""
        },
        methods: {
            saveNewItem: function () {
                this.items.push(
                    {
                        task: this.newItem,
                        isCompleted: false
                    }
                );
                this.newItem = "";
            },

            completeItem: function (index) {
                this.items[index].isCompleted = true;
            }
        }
    });
});
