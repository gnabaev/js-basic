const newToDoList = {
    tasks: [{
        id: 1,
        title: 'Помыть посуду',
        priority: 2,
    }, {
        id: 2,
        title: 'Прибраться',
        priority: 1
    }],

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

const newTask = {
    id: 3,
    title: 'Сходить в магазин',
    priority: 3
}

const task = newToDoList.getById(1);
console.log(task);

newToDoList.add(newTask);
console.log(newToDoList);

newToDoList.updateTitleById(2, 'Пропылесосить');
console.log(newToDoList);

newToDoList.sortByPriority();
console.log(newToDoList);

newToDoList.removeById(3);
console.log(newToDoList);