import { Component , OnInit } from '@angular/core';
import { FormControl , FormGroup , AbstractControl ,Validators , FormBuilder, ValidatorFn  } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!:FormGroup;
   constructor(private fb : FormBuilder){
    
    
   }
  ngOnInit() {
    this.form  = this.fb.group({
      name :['' , [Validators.required]],
      phoneNo : ['',[Validators.required , Validators.pattern('^[6-9]{1}[0-9]{9}$')]],
      // age : ['',Validators.required , Validators.min(18) , Validators.max(60)],
      password: ['',[Validators.required , Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")]],
      confirmPassword:['', [Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")]]
    });
    this.form.addValidators(this.PasswordCheck(this.form.get('password'),this.form.get('confirmPassword')))
  }
  
  PasswordCheck(
    control: AbstractControl,
    controlTwo: AbstractControl
  ): ValidatorFn {
    return () => {
      if (control.value !== controlTwo.value)
        return { match_error: 'Value does not match' };
      return null;
    };

}
register(c: FormGroup){
  console.log(c.valid);
  console.log(c.value);
  console.log(c.value.name);

}
}
