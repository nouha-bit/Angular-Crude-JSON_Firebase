import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'; 
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cnx:AngularFireAuth, private bd:AngularFireDatabase,private router:Router) { }
  createmember(username,email,password){
  
    this.cnx.auth.createUserWithEmailAndPassword(email, password).then(user => {
      console.log(user.user.uid);
      const data = {
        username:username,
        email: email,
        Password: password
        
      }
      console.log(data);
  
      this.bd.database.ref('Users/' + user.user.uid).set(data);
     
    })
  
  }
  connexion(email,password){
    this.cnx.auth.signInWithEmailAndPassword(email, password).then(user => {
      console.log(user);
     this.router.navigate(['/Dash'])
    })
  }
}
