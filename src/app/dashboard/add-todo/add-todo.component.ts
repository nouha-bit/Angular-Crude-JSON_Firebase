import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoForm = new FormGroup({
    nom: new FormControl('',[Validators.required, Validators.minLength(5)]),
    desc: new FormControl('',[Validators.required, Validators.minLength(5)])
   
});
  constructor(private data:DataService, private router:Router) { }

  ngOnInit() {
  }
 

createTodo(){
  this.data.addtodo({nom:this.todoForm.controls.nom.value,desc:this.todoForm.controls.desc.value})
  .subscribe(data=> {
    console.log(data);
  })
  this.router.navigate(['/Dash/listtodo'])
}
}
