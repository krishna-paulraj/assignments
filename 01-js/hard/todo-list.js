/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  Todos = [];
  add(todo) {
    this.Todos.push(todo);
  }
  remove(index) {
    this.Todos.splice(index, 1);
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.Todos.length) {
      this.Todos[index] = updatedTodo;
    }
  }
  getAll() {
    return this.Todos;
  }
  get(index) {
    if (index >= 0 && index < this.Todos.length) {
      return this.Todos[index];
    } else {
      return null;
    }
  }
  clear() {
    this.Todos = [];
  }
}

module.exports = Todo;
