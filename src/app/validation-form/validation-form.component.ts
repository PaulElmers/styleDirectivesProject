import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  template: `
    <form [formGroup]="form">
      <input formControlName="password" placeholder="Password" type="password">
      <input formControlName="confirmPassword" placeholder="Confirm Password" type="password" *ngIf="form.get('password').valid">
      <button type="submit">Submit</button>
    </form>
  `
})
export class ValidationFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['']
    });
  }
}
