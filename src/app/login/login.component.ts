import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  MForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
   
});
  constructor(private sevr:AuthService) { }

  ngOnInit() {
  }

  test(){
    this.sevr.connexion(this.MForm.controls.email.value,this.MForm.controls.password.value);

  }
  

}
