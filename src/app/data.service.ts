import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlAPi='http://localhost:3000';
  baseUrl = 'http://localhost:3000/toDo/';
 
  constructor(private http:HttpClient) { }
 
  // getUsers(): Observable<User> {
  //   return this.http.get<User>(this.urlAPi + '/toDO')
  // }
  addtodo(todo){
    const headers= new HttpHeaders({'content-type':'application/json'});
    let options = {
   headers:headers,
    }
   
       
  return  this.http.post(this.urlAPi+'/toDo',JSON.stringify(todo), options);
  }

  gettodo(id) {
    {
      return this.http.get(this.baseUrl +id);
    }
  }
  listTodo(){
      return this.http.get(this.baseUrl);
    }
    deleteTodo(todo: any) {
      const headers= new HttpHeaders({'content-type':'application/json'});
      let options = {
     headers:headers,
      }
      return this.http.delete(this.baseUrl+'/'+todo.id);
    }
    updateTodo(todo) {
      const headers= new HttpHeaders({'content-type':'application/json'});
      let options = {
     headers:headers,
      }
      console.log(todo);
      return this.http.patch(this.baseUrl+todo.id, todo,options);
      
    }
  }

