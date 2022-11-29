import { Component , OnInit } from '@angular/core';
import {FormControl , FormGroup} from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm !: FormGroup;
  ngOnInit(): void {
   this.reactiveForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl(''),
    password : new FormControl('')
   });
  }

  submitFunction(c : FormGroup){
    console.log(this.reactiveForm.value);
    console.log('Valid?', this.reactiveForm.valid); 
    console.log('Name', this.reactiveForm.value.name);
    console.log('Email', this.reactiveForm.value.email);
    console.log('Message', this.reactiveForm.value.message);
    ///////////////////////////////////////////////////////
    console.log(c.value);
    console.log('Valid?', c.valid);
    console.log('Name', c.value.name);
    console.log('Email', c.value.email);
    console.log('Message',c.value.message);
  }

}
