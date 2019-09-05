import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  pForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]) 
});

user={username:this.pForm.controls.username.value,
  email:this.pForm.controls.email.value,
  password:this.pForm.controls.password.value};

  constructor(private service:AuthService) { }

  ngOnInit() {
  }
//   createuser(){
//     this.service.adduser(this.pForm.value).subscribe(data=>{
//    console.log(this.pForm.value)
//       console.log(data);
//   })

add(){
  this.service.createmember(this.pForm.controls.username.value,this.pForm.controls.email.value,this.pForm.controls.password.value)
 

}
}
