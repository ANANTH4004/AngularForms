import { Component , OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validator , ValidationErrors} from '@angular/forms'
@Component({
  selector: 'app-builder-validation',
  templateUrl: './builder-validation.component.html',
  styleUrls: ['./builder-validation.component.css']
})
export class BuilderValidationComponent implements OnInit {

  registerForm !: FormGroup;
  constructor(private fb : FormBuilder){

  }
  ngOnInit() {
   this.registerForm = this.fb.group({
    name : '',
    email : '',
    age : '',
    password : ''
   })
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Age', form.value.age);
    console.log('Password', form.value.password);
  }

}
