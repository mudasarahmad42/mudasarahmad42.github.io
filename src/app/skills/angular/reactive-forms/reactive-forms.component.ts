import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  form: FormGroup;
  data: string = "";

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      skills: this.fb.array([this.fb.control('', Validators.required)])
    });
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  submit() {
    if (this.form.valid) {
      this.data = this.form.value;
      console.log('Form Submitted:', this.form.value);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  // Validations
  isFormValueInValid(propertyName: string) {
    return this.form.get(propertyName)?.touched && this.form.get(propertyName)?.invalid
  }

  isSkillInvalid(index: number) {
    return this.skills.at(index)?.touched && this.skills.at(index)?.invalid;
  }
}
