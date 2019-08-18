import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let formComponent: TodoFormComponent;

  beforeEach(() => {
    formComponent = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(formComponent.form.contains('name')).toBeTruthy();
    expect(formComponent.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    const nameControl = formComponent.form.get('name');
    nameControl.setValue('');
    expect(nameControl.valid).toBeFalsy();
  });
});
