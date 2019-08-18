import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let todosComponent: TodosComponent;
  let todosService: TodoService;
  const todosList = [1, 2, 3];

  beforeEach(() => {
    todosService = new TodoService(null);
    todosComponent = new TodosComponent(todosService);
  });

  it('should set todos property with the items returned from the server', () => {
    spyOn(todosService, 'getTodos').and.callFake(() => {
      return from([ todosList ]);
    });

    todosComponent.onInit();
    expect(todosComponent.todos.length).toBe(3);
  });

  it('should set todos property with the items returned from the server', () => {
    spyOn(todosService, 'getTodos').and.callFake(() => {
      return from([ todosList ]);
    });

    todosComponent.onInit();
    expect(todosComponent.todos).toBe(todosList);
  });

  it('should make sure the add service is called and returned', () => {
    const spy = spyOn(todosService, 'add').and.callFake(() => {
      return empty();
    });

    todosComponent.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should increase the amount of todos when adding a new item', () => {
    const addedTodo = {id: 1, title: '...' };
    const spy = spyOn(todosService, 'add').and.callFake(() => {
      return from([ addedTodo ]);
    });

    todosComponent.add();
    expect(todosComponent.todos.indexOf(addedTodo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server returns an error adding a new todo', () => {
    const serverError = 'Error adding new todo';
    const spy = spyOn(todosService, 'add').and.callFake(() => {
      return throwError(serverError);
    });

    todosComponent.add();
    expect(todosComponent.message).toBe(serverError);
  });

  it('should call the server to delete a todo item', () => {
    spyOn(window, 'confirm').and.callFake(() => {
      return true;
    });
    const deleteSpy = spyOn(todosService, 'delete').and.callFake(() => {
      return empty();
    });

    todosComponent.delete(1);
    expect(deleteSpy).toHaveBeenCalled();
    expect(deleteSpy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if user cancels', () => {
    spyOn(window, 'confirm').and.callFake(() => {
      return false;
    });
    const deleteSpy = spyOn(todosService, 'delete').and.callFake(() => {
      return empty();
    });

    todosComponent.delete(1);
    expect(deleteSpy).not.toHaveBeenCalled();
    expect(deleteSpy).not.toHaveBeenCalledWith(1);
  });

});
