import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class DashService {
username:string;
  constructor(private bd:AngularFireDatabase) { }
// listusers(){
// let userData= this.bd.database.ref('Users/').orderByKey();
//  userData.once("value").then(user => {
//   user.forEach(childuser => {
        
//       var key = childuser.key;
//       console.log(key);
//       let childData = childuser.val();
//      this.username=childData.username;
//  })
// })
// return this.username;
// }
}

