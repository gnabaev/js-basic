const toDoList = {
    tasks: [],

    getById: function (id) {
        return this.tasks.find(t => t.id === id);
    },

    add: function (newTask) {
        const task = this.getById(newTask.id);
        if (task) {
            console.log("Данная задача уже есть в списке!");
            return;
        }

        this.tasks.push(newTask);
    },

    removeById: function (id) {
        const taskIndex = this.tasks.findIndex(t => t.id === id);
        if (taskIndex > -1) {
            this.tasks.splice(taskIndex, 1);
        }
        return this.tasks;
    },

    updateTitleById: function (id, newTitle) {
        const task = this.getById(id);
        if (task) {
            task.title = newTitle;
        }
    },

    sortByPriority: function () {
        return this.tasks.sort((a, b) => a.priority - b.priority);
    }
}

console.log(toDoList);
